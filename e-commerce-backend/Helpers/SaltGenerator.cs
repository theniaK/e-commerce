using System.Security.Cryptography;

namespace e_commerce_backend.Helpers
{
    internal static class SaltGenerator
    {
        internal static string GenerateSalt()
        {
            byte[] saltBytes = new byte[128 / 8];
            using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
            {
                rng.GetNonZeroBytes(saltBytes);
            }

            return Convert.ToBase64String(saltBytes);
        }
    }
}
