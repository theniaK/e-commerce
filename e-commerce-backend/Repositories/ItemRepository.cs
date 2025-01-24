using e_commerce_backend.Context;
using e_commerce_backend.Models;

namespace e_commerce_backend.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly ApplicationDbContext _context;
        public ItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<Item> FirstOrDefault(Item item)
        {
            var savedItem = _context.Items.FirstOrDefault(i => i.Title == item.Title);
            if (savedItem == null)
            {
                return null;
            }
            return Task.FromResult(savedItem);
        }
    }
}
