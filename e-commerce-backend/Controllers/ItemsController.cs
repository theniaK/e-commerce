using System;
using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ItemsController(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        /// <summary>
        /// Post all items from json
        /// </summary>
        /// <returns></returns>
        [HttpPost("post/json")]
        [ProducesResponseType(204)]
        [ProducesResponseType(500)]
        public async Task<ActionResult> PostItemsFromJson()
        {
            var filePath = Path.Combine(_env.ContentRootPath, "ItemsInJson\\products.json");
            string json = System.IO.File.ReadAllText(filePath);
            if(!string.IsNullOrEmpty(json))
            {
                List<ItemDTO> items = JsonConvert.DeserializeObject<List<ItemDTO>>(json);
                if (items !=null && items.Any())
                {
                    foreach (ItemDTO item in items)
                    {
                        item.Id = Guid.NewGuid();
                        _context.Items.Add(item);
                        await _context.SaveChangesAsync();
                    }
                        return await Task.FromResult(NoContent());
                }
            }

            return StatusCode(500);
        }

        [HttpDelete("delete")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllItems()
        {
            IEnumerable<ItemDTO> items = await _context.Items.ToListAsync();
            _context.RemoveRange(items);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        /// <summary>
        /// Post individual item
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        [HttpPost("post")]
        [ProducesResponseType(204)]
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

        /// <summary>
        /// Get all items from the Database
        /// </summary>
        /// <returns></returns>
        [HttpGet("get")]
        [ProducesResponseType(200)]
        public async Task<ActionResult<IEnumerable<Item>>> GetItem()
        {
            var items = await _context.Items.ToListAsync();

            return Ok(items);
        }
    }
}
