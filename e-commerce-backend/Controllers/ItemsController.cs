using AutoMapper;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using e_commerce_backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly IBaseRepository<Item> _baseRepository;
        private readonly IItemRepository _itemRepository;
        private readonly IWebHostEnvironment _env;
        private readonly IMapper _mapper;

        public ItemsController(IWebHostEnvironment env, IMapper mapper, IBaseRepository<Item> baseRepository, IItemRepository itemRepository)
        {
            _env = env;
            _mapper = mapper;
            _baseRepository = baseRepository;
            _itemRepository = itemRepository;
        }

        /// <summary>
        /// Post all items from json
        /// </summary>
        /// <returns>No content if succesful; otherwise 404 Not Found response.</returns>
        [HttpPost("seedJson")]
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
                        var savedItem = _itemRepository.GetSavedItemAsync(item);
                        if (savedItem != null)
                        {
                            continue;
                        }

                        await _baseRepository.AddEntityAsync(item);
                        await _baseRepository.SaveAsync();
                    }
                        return NoContent();
                }
            }

            return NotFound(new { message = "Db Seed not found"});
        }

        /// <summary>
        /// Post an item
        /// </summary>
        /// <param name="itemDTO"></param>
        /// <returns>No content if succesful; otherwise 400 Bad Request response.</returns>
        [HttpPost("item")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public async Task<ActionResult> PostOneItem(ItemDTO itemDTO)
        {
            var entity = _mapper.Map<Item>(itemDTO);
            if(entity == null)
            {
                return BadRequest();
            }
            await _baseRepository.AddEntityAsync(entity);
            return NoContent();
        }


        /// <summary>
        /// Get all items
        /// </summary>
        /// <returns>>The item list.</returns>
        [HttpGet("items")]
        [ProducesResponseType(200)]
        public async Task<ActionResult<IEnumerable<Item>>> GetAllItems()
        {
            IEnumerable<Item> items = await _baseRepository.GetEntitiesAsync();
            return Ok(items.ToList());
        }

        /// <summary>
        /// Get an item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>The item if succesful; otherwise 404 Not Found response./returns>
        [HttpGet("item/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> GetOneItem(Guid id)
        {
            var item = await _baseRepository.GetEntityAsync(id);
            if (item != null)
            {
                return Ok(item);
            }

            return NotFound(new { message = "Item not found", id = id });
        }

        /// <summary>
        /// Delete all items
        /// </summary>
        /// <returns>No Content response.</returns>
        [HttpDelete("items")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllItems()
        {
            await _baseRepository.DeleteAllEntitiesAsync();
            return NoContent();
        }

        /// <summary>
        /// Delete an item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>No Content if successful; otherwise 404 Not Found response.</returns>
        [HttpDelete("item/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> DeleteOneItem(Guid id)
        {
            var item = await _baseRepository.GetEntityAsync(id);
            if (item == null)
            {
                return NotFound($"No item was found with the id: {id}!");
            }

            await _baseRepository.DeleteEntityAsync(id);
            return NoContent();
        }
    }
}
