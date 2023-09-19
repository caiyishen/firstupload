import CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Utf8.parse('ey65gregerge6@rg') // 十六位十六进制数作为密钥

// 解密方法
export function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { undefined, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
export function Encrypt(content) {
  let keyStr = key
  let srcs = CryptoJS.enc.Utf8.parse(content)
  let encrypted = CryptoJS.AES.encrypt(srcs, keyStr, { undefined, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}
