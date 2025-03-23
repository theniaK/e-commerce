namespace e_commerce_backend.Repositories
{
    public interface IBaseRepository<T>
    {
        Task AddEntityAsync(T entity);
        Task<T?> GetEntityAsync(Guid id);
        Task<IEnumerable<T>> GetEntitiesAsync();
        Task DeleteEntityAsync(Guid id);
        Task DeleteAllEntitiesAsync();
        Task SaveAsync();
    }
}
