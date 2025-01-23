using e_commerce_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
