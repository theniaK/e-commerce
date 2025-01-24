
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

        public async Task AddEntity(T entity)
        {
            if (entity != null)
            {
                entity.Id = Guid.NewGuid();
                await _context.Set<T>().AddAsync(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteAllEntities()
        {
            var entities = await _context.Set<T>().ToListAsync();
            _context.RemoveRange(entities);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEntity(Guid id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                return;
            }

            _context.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetEntities()
        {
            var entities = await _context.Set<T>().ToListAsync();
            return entities;
        }

        public async Task<T> GetEntity(Guid id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                return null;
            }

            return entity;
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
    }
}
