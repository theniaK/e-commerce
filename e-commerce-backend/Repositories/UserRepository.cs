
using e_commerce_backend.Context;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> CheckEmailAdress(string emailAddress)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EmailAddress == emailAddress);
            if (user == null)
            {
                return false;
            }

            return true;
        }
    }
}
