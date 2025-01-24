using AutoMapper;
using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using e_commerce_backend.Repositories;
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
        private readonly IBaseRepository<Item> _baseRepository;
        private readonly IItemRepository _itemRepository;
        private readonly IWebHostEnvironment _env;
        private readonly IMapper _mapper;

        public ItemsController(ApplicationDbContext context, IWebHostEnvironment env, IMapper mapper, IBaseRepository<Item> baseRepository, IItemRepository itemRepository)
        {
            _context = context;
            _env = env;
            _mapper = mapper;
            _baseRepository = baseRepository;
            _itemRepository = itemRepository;
        }

        /// <summary>
        /// Post all items from json
        /// </summary>
        /// <returns></returns>
        [HttpPost("post/json")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> SeedItemsFromJson()
        {
            var filePath = Path.Combine(_env.ContentRootPath, "DbSeed\\products.json");
            string json = System.IO.File.ReadAllText(filePath);
            if(!string.IsNullOrEmpty(json))
            {
                List<Item> items = JsonConvert.DeserializeObject<List<Item>>(json) ?? new List<Item>();
                if (items !=null && items.Any())
                {
                    foreach (Item item in items)
                    {
                        //var savedItem = _context.Items.FirstOrDefault(i => i.Title == item.Title);
                        var savedItem = _itemRepository.FirstOrDefault(item);
                        if (savedItem != null)
                        {
                            continue;
                        }

                        await _baseRepository.AddEntity(item);
                        await _baseRepository.Save();
                    }
                        return NoContent();
                }
            }

            return NotFound(new { message = "Db Seed not found"});
        }

        /// <summary>
        /// Post an item
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        [HttpPost("post")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> PostOneItem(ItemDTO itemDTO)
        {
            var entity = _mapper.Map<Item>(itemDTO);
            await _baseRepository.AddEntity(entity);
            return NoContent();
        }


        /// <summary>
        /// Get all items
        /// </summary>
        /// <returns></returns>
        [HttpGet("get")]
        //[Authorize]
        [ProducesResponseType(200)]
        public async Task<ActionResult<IEnumerable<Item>>> GetAllItems()
        {
            IEnumerable<Item> items = await _baseRepository.GetEntities();
            return Ok(items.ToList());
        }

        /// <summary>
        /// Get an item
        /// </summary>
        /// <returns>The item</returns>
        [HttpGet("get/{id}")]
        [ProducesResponseType(200)]
        public async Task<ActionResult> GetOneItem(Guid id)
        {
            var item = await _baseRepository.GetEntity(id);
            if (item != null)
            {
                return Ok(item);
            }

            return NotFound(new { message = "Item not found", id = id });
        }

        /// <summary>
        /// Delete all items
        /// </summary>
        /// <returns></returns>
        [HttpDelete("delete")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllItems()
        {
            await _baseRepository.DeleteAllEntities();
            return NoContent();
        }

        /// <summary>
        /// Delete an item
        /// </summary>
        /// <returns></returns>
        [HttpDelete("delete/{id}")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteOneItem(Guid id)
        {
            await _baseRepository.DeleteEntity(id);
            return NoContent();
        }
    }
}
