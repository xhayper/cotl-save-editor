export const useSaveState = () => {
  const { $wasm } = useNuxtApp();
  const rust = $wasm as any;

  const shouldEncrypt = ref(true);
  const shouldUseRustBackend = ref(false);
  const isRustBackendAvailable = ref(!!rust);
  const saveData = ref({} as Record<string, any>);

  const importSave = async (data: Uint8Array) => {
    if (rust && shouldUseRustBackend.value) {
      try {
        saveData.value = rust.decode(data);
        shouldEncrypt.value = data[0] === 69;
      } catch (ignored) {}
    } else {
      if (data[0] === 69) {
        // E
        try {
          const aesKey = await window.crypto.subtle.importKey(
            "raw",
            data.subarray(1, 17),
            {
              name: "AES-CBC",
              length: 128,
            },
            false,
            ["decrypt"]
          );

          const decrpytedData = await window.crypto.subtle.decrypt(
            {
              name: "AES-CBC",
              iv: data.subarray(17, 33),
            },
            aesKey,
            data.subarray(33)
          );

          try {
            saveData.value = JSON.parse(
              new TextDecoder().decode(decrpytedData)
            );
            shouldEncrypt.value = true;
          } catch (ignored) {}
        } catch (ignored) {}
      } else {
        try {
          saveData.value = JSON.parse(new TextDecoder().decode(data));
          shouldEncrypt.value = false;
        } catch (ignored) {}
      }
    }
  };

  const exportSave = async (): Promise<Uint8Array> => {
    if (rust && shouldUseRustBackend.value)
      try {
        return rust.encode(saveData.value);
      } catch (ignored) {}

    let data = new TextEncoder().encode(JSON.stringify(saveData.value));

    if (shouldEncrypt.value) {
      try {
        const cryptoKey = await window.crypto.subtle.generateKey(
          {
            name: "AES-CBC",
            length: 128,
          },
          true,
          ["encrypt"]
        );

        const key = await window.crypto.subtle.exportKey("raw", cryptoKey);
        const iv = window.crypto.getRandomValues(new Uint8Array(16));
        const encrypted = await window.crypto.subtle.encrypt(
          { name: "AES-CBC", iv },
          cryptoKey,
          data
        );

        data = new Uint8Array(
          1 + key.byteLength + iv.byteLength + encrypted.byteLength
        );
        data.set([69]); // E
        data.set(new Uint8Array(key), 1);
        data.set(iv, 1 + key.byteLength);
        data.set(new Uint8Array(encrypted), 1 + key.byteLength + iv.byteLength);
      } catch (ignored) {}
    }

    return data;
  };

  return {
    shouldEncrypt,
    shouldUseRustBackend,
    isRustBackendAvailable,
    saveData,
    importSave,
    exportSave,
  };
};
