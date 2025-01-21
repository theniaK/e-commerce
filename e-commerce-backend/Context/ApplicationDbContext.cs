using e_commerce_backend.DTOs;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<ItemDTO> Items { get; set; }
    }
}
