﻿using AutoMapper;
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
        private readonly IMapper _mapper;

        public ItemsController(ApplicationDbContext context, IWebHostEnvironment env, IMapper mapper)
        {
            _context = context;
            _env = env;
            _mapper = mapper;
        }

        /// <summary>
        /// Post all items from json
        /// </summary>
        /// <returns></returns>
        [HttpPost("post/json")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> PostItemsFromJson()
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
                        var savedItem = _context.Items.FirstOrDefault(i => i.Title == item.Title);
                        if(savedItem != null)
                        {
                            continue;
                        }

                        item.Id = Guid.NewGuid();
                        await _context.Items.AddAsync(item);
                        await _context.SaveChangesAsync();
                    }
                        return await Task.FromResult(NoContent());
                }
            }

            return NotFound();
        }

        /// <summary>
        /// Post individual item
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        [HttpPost("post")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> PostItem(ItemDTO itemDTO)
        {
            Item Item = _mapper.Map<Item>(itemDTO);
            if (Item != null)
            {
                Item.Id = Guid.NewGuid();
                await _context.Items.AddAsync(Item);
                await _context.SaveChangesAsync();
            }

            return await Task.FromResult(NoContent());
        }


        /// <summary>
        /// Get all items from the Database
        /// </summary>
        /// <returns></returns>
        [HttpGet("get")]
        //[Authorize]
        [ProducesResponseType(200)]
        public async Task<ActionResult<IEnumerable<Item>>> GetItem()
        {
            var items = await _context.Items.ToListAsync();

            return Ok(items);
        }

        /// <summary>
        /// Gets specific Item
        /// </summary>
        /// <returns>The item</returns>
        [HttpGet("get/{id}")]
        [ProducesResponseType(200)]
        public async Task<ActionResult> GetItem(Guid id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item != null)
            {
                return Ok(item);
            }

            return NotFound("Item not found");
        }

        /// <summary>
        /// Delete all item records from database
        /// </summary>
        /// <returns></returns>
        [HttpDelete("delete")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllItems()
        {
            IEnumerable<Item> items = await _context.Items.ToListAsync();
            _context.RemoveRange(items);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        /// <summary>
        /// Delete specific Item
        /// </summary>
        /// <returns></returns>
        [HttpDelete("delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> DeleteItem(Guid id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound("Item not found");
            }

            _context.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
