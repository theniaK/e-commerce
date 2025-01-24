namespace e_commerce_backend.Repositories
{
    public interface IBaseRepository<T>
    {
        Task AddEntity(T entity);
        Task<T> GetEntity(Guid id);
        Task<IEnumerable<T>> GetEntities();
        Task DeleteEntity(Guid id);
        Task DeleteAllEntities();
        Task Save();
    }
}
