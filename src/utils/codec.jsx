import JSEncrypt from 'jsencrypt';

const encrypt = new JSEncrypt();

// export const RSA_LOGIN_PUBLIC_KEY=
//   '-----BEGIN PUBLIC KEY-----' +
//   'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAN/phM7Ba+UaKAK2hfwzfvd7T/UXY4Hm' +
//   'bdfhKIupW2zjN54VL6OFh9UmqM8FHoTgEipTuvPr5HjwfxHiwvcjhu0CAwEAAQ==' +
//   '-----END PUBLIC KEY-----';

export const RSA_LOGIN_PUBLIC_KEY=
  '-----BEGIN PUBLIC KEY-----' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrkMLrhjSjWvPHTOaoyTmafAj+g3wbNXsW' +
  'ZsCf2KTd7DiTqial7E2g/xsaQY5eHG1oDff+884RmcEZe/qUr6jU8SqvYaJSCJJLyo90SVN' +
  '/pCqUGlPDEYQq/AUiGJONki/6vlZWeEWfY+eRR1HN+zLyE089udGolW0TGChvI7FMTQIDAQAB' +
  '-----END PUBLIC KEY-----';


encrypt.setPublicKey(RSA_LOGIN_PUBLIC_KEY);

export const RSALoginEncrypt = (data) =>{
    return data? encrypt.encrypt(data): '';
}
