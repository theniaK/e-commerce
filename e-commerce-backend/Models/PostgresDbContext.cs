using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Models
{
    public class PostgresDbContext : DbContext
    {
        public PostgresDbContext(DbContextOptions<PostgresDbContext> options) : base(options) 
        { 
        }

        public DbSet<Item> Items { get; set; }
    }
}
