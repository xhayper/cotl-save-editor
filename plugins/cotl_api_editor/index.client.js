import * as wasm from "./index_bg.wasm";
import * as bg from "./index_bg.js";
wasm.__wbindgen_start();

export default defineNuxtPlugin(() => {
  return { provide: { wasm: { ...bg } } };
});
