using e_commerce_backend.Context;
using e_commerce_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private readonly ApplicationDbContext _context;

        public BaseRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddEntityAsync(T entity)
        {
            if (entity != null)
            {
                entity.Id = Guid.NewGuid();
                try
                {
                    await _context.Set<T>().AddAsync(entity);
                    await SaveAsync();
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException("An error occurred while adding the entity.", ex);
                }
            }
        }

        public async Task DeleteAllEntitiesAsync()
        {
            try
            {
                var entities = await _context.Set<T>().ToListAsync();
                _context.RemoveRange(entities);
                await SaveAsync();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An error occurred while deleting the entities.", ex);
            }
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            try
            {
                var entity = await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
                if (entity == null)
                {
                    return;
                }

                _context.Remove(entity);
                await SaveAsync();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An error occurred while deleting the entity.", ex);
            }
        }

        public async Task<IEnumerable<T>> GetEntitiesAsync()
        {
            try
            {
                var entities = await _context.Set<T>().ToListAsync();
                return entities;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An error occurred while getting the entities.", ex);
            }
        }

        public async Task<T?> GetEntityAsync(Guid id)
        {
            try
            {
                var entity = await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
                if (entity == null)
                {
                    return null;
                }

                return entity;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("An error occurred while retrieving the entity.", ex);
            }
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
