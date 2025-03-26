namespace e_commerce_backend.Resources
{
    public interface IPasswordHasher
    {
        string HashPassword(string password, string salt);
    }
}
