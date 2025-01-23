using AutoMapper;
using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UsersController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Post user
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns></returns>
        [HttpPost("signup")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> SignUpUser(UserDTO userDto)
        {
            User user = _mapper.Map<User>(userDto);
            if(userDto != null)
            {
                user.Id = Guid.NewGuid();
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
            }

            return await Task.FromResult(NoContent());
        }

        /// <summary>
        /// Get a user by their credentials
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A user</returns>
        [HttpGet("signin/{email}/{password}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> GetUser(string email, string password)
        {
            var user = _context.Users.FirstOrDefault(u => u.EmailAddress == email
                                                        && u.Password == password);
            if (user != null)
            {
                return await Task.FromResult(Ok(user));
            }

            return NotFound("User not found");
        }

        /// <summary>
        /// Get a user by Id
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A user</returns>
        [HttpGet("get/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> GetUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                return Ok(user);
            }

            return NotFound("User not found");
        }

        /// <summary>
        /// Delete a user by Id
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpDelete("delete/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return Ok();
            }

            return NotFound("User not found");
        }
    }
}
