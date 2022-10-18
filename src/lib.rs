extern crate cfg_if;

use aes::cipher::{block_padding::Pkcs7, BlockDecryptMut, BlockEncryptMut, KeyIvInit};
use bytes::BufMut;
use bytes::BytesMut;
use cfg_if::cfg_if;
use js_sys::{Object, Uint8Array, JSON};
use rand::prelude::*;
use std::io::Write;
use std::panic;
use std::str;
use wasm_bindgen::prelude::*;

type Aes128CbcEnc = cbc::Encryptor<aes::Aes128>;
type Aes128CbcDec = cbc::Decryptor<aes::Aes128>;

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen(start)]
pub fn main() {
    cfg_if! {
        if #[cfg(feature = "console_error_panic_hook")] {
            extern crate console_error_panic_hook;

            panic::set_hook(Box::new(console_error_panic_hook::hook));
        }
    }
}

#[wasm_bindgen]
pub fn decode(data: Uint8Array) -> Result<JsValue, JsValue> {
    let data = data.to_vec();

    // data is encrypted
    if data[0] == 69 {
        let key = data[1..=16].to_owned();
        let iv = data[17..=32].to_owned();

        let key = key.as_slice();
        let iv = iv.as_slice();

        let mut buf = data[33..].to_owned();
        let mut buf = &mut *buf;

        let decrypted =
            match Aes128CbcDec::new(key.into(), iv.into()).decrypt_padded_mut::<Pkcs7>(&mut buf) {
                Ok(c) => c,
                Err(e) => panic!("{}", e),
            };

        let obj_str = match str::from_utf8(&decrypted) {
            Ok(c) => c,
            Err(e) => panic!("{}", e),
        };
        let obj = match JSON::parse(obj_str) {
            Ok(c) => c,
            Err(e) => panic!("Can't parse object! {}", e.as_string().unwrap()),
        };

        return Ok(obj);
        // Data is NOT encrypted
    } else {
        let str = str::from_utf8(&data);
        let str = match str {
            Ok(v) => v,
            Err(e) => panic!("{}", e),
        };

        let value = JSON::parse(str);
        let value = match value {
            Ok(v) => v,
            Err(_e) => panic!("Error while trying to parse JSON!"),
        };

        return Ok(value);
    }
}

#[wasm_bindgen]
pub fn encode(data: Object) -> Result<Uint8Array, JsValue> {
    let data = JSON::stringify(&data);
    let data = match data {
        Ok(v) => v.as_string().unwrap(),
        Err(_e) => panic!("Error stringifing value!"),
    };

    let mut writer = BytesMut::new().writer();
    writer.write(&[69]).unwrap();

    let mut buf: Vec<u8> = vec![0u8; 32 + data.len()];
    let pt_len = data.len();
    buf[..pt_len].copy_from_slice(&data.as_bytes());

    let mut rng = rand::thread_rng();
    let mut key = [0u8; 16];
    rng.fill_bytes(&mut key);
    let mut iv = [0u8; 16];
    rng.fill_bytes(&mut iv);

    let encrypted = match Aes128CbcEnc::new(&key.into(), &iv.into())
        .encrypt_padded_mut::<Pkcs7>(&mut buf, pt_len)
    {
        Ok(v) => v,
        Err(e) => panic!("{}", e),
    };

    writer.write(&key).unwrap();
    writer.write(&iv).unwrap();
    writer.write(&encrypted).unwrap();

    Ok(Uint8Array::from(writer.into_inner().as_ref()))
}
