using e_commerce_backend.Context;
using e_commerce_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly ApplicationDbContext _context;

        public ItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Item> GetSavedItemAsync(Item item)
        {
            try
            {
                var savedItem = await _context.Items.FirstOrDefaultAsync(i => i.Title == item.Title);
                return savedItem;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An error occurred while getting the item.", ex);
            }
        }
    }
}
