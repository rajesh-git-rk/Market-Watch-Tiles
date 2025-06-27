//package com.topaz.trading.controller;
//
//public class CommonEncryptAndDecrypt {
//
//	
//
//public String EncryptString(String input)
//        {
//            RijndaelManaged objrij = new RijndaelManaged();
//            objrij.Mode = CipherMode.CBC;
//            objrij.Padding = PaddingMode.PKCS7;
//            byte[] passBytes = Encoding.UTF8.GetBytes(this.key);
//            objrij.Key = passBytes;
//            byte[] IV = new byte[16];
//            objrij.IV = IV;
//
//            byte[] encrypted;
//            ICryptoTransform encryptor = objrij.CreateEncryptor(objrij.Key, objrij.IV);
//
//            // Create the streams used for encryption.
//            using (MemoryStream msEncrypt = new MemoryStream())
//            {
//                using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
//                {
//                    using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
//                    {
//                        //Write all data to the stream.
//                       swEncrypt.Write(input);
//                    }
//                    encrypted = msEncrypt.ToArray();
//                }
//            }
//            return Convert.ToBase64String(encrypted);
//        }
//
//        public string DecryptString(string encryptedText)
//        {
//            RijndaelManaged objrij = new RijndaelManaged();
//            objrij.Mode = CipherMode.CBC;
//            objrij.Padding = PaddingMode.PKCS7;
//            byte[] encryptedTextByte = Convert.FromBase64String(encryptedText);
//            byte[] passBytes = Encoding.UTF8.GetBytes(this.key);
//            byte[] IV = new byte[16];
//            objrij.Key = passBytes;
//            objrij.IV = IV;
//            
//            string plaintext = null;
//            ICryptoTransform decryptor = objrij.CreateDecryptor(objrij.Key, objrij.IV);
//
//            using (MemoryStream msDecrypt = new MemoryStream(encryptedTextByte))
//            {
//                using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
//                {
//                    using (StreamReader srDecrypt = new StreamReader(csDecrypt))
//                    {
//                        plaintext = srDecrypt.ReadToEnd();
//                    }
//                }
//            }
//            return plaintext;
//
//        }
//
//}
