using e_commerce_backend.Models;

namespace e_commerce_backend.Repositories
{
    public interface IItemRepository
    {
        Task<Item> FirstOrDefault(Item item);
    }
}
