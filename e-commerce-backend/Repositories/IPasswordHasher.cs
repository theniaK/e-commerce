namespace e_commerce_backend.Repositories
{
    public interface IPasswordHasher
    {
        string HashPassword(string password, string salt);
    }
}
