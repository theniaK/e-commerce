namespace e_commerce_backend.Repositories
{
    public interface IUserRepository
    {
        Task<bool> CheckEmailAdress(string emailAddress);
    }
}
