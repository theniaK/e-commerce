using e_commerce_backend.Models;

namespace e_commerce_backend.Repositories
{
    public interface IItemRepository
    {
        Task<Item> GetSavedItemAsync(Item item);
    }
}
