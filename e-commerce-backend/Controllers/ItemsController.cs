using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItemsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("post")]
        public async Task<ActionResult> PostItem(Item item)
        {
            ItemDTO ItemDTO = new ItemDTO
            {
                Id = Guid.NewGuid(),
                Title = item.Title,
                Description = item.Description,
                Price = item.Price,
                Image = item.Image,
                Category = item.Category,
            };

            _context.Items.Add(ItemDTO);
            await _context.SaveChangesAsync();

            return await Task.FromResult(NoContent());
        }
    }
}
