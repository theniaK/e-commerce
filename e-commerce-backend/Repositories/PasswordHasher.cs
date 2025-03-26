using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Text;

namespace e_commerce_backend.Repositories
{
    public class PasswordHasher : IPasswordHasher
    {
        private readonly IConfiguration _config;

        public PasswordHasher(IConfiguration config)
        {
            _config = config;
        }

        public string HashPassword(string password, string salt)
        {
            string passwordSaltPlusString = _config.GetSection("AppSettings:PasswordKey").Value + salt;

            byte[] passwordHash = KeyDerivation.Pbkdf2(
                password: password,
                salt: Encoding.UTF8.GetBytes(passwordSaltPlusString),
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 1000000,
                numBytesRequested: 256 / 8
            );

            return Convert.ToBase64String(passwordHash);
        }
    }
}

