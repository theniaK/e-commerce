using AutoMapper;
using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Helpers;
using e_commerce_backend.Models;
using e_commerce_backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IBaseRepository<User> _baseRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(ApplicationDbContext context, IMapper mapper, IBaseRepository<User> baseRepository, IUserRepository userRepository)
        {
            _context = context;
            _mapper = mapper;
            _baseRepository = baseRepository;
            _userRepository = userRepository;
        }

        /// <summary>
        /// Post user
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns></returns>
        [HttpPost("signup")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public async Task<ActionResult> SignUpUser(UserDTO userDto)
        {
            if (userDto == null)
            {
                return BadRequest("Model received is not valid");
            }

            var user = _mapper.Map<User>(userDto);
            user.LastLogIn = DateTime.UtcNow;
            if (user == null) 
            {
                return BadRequest("Failed to map the user data.");
            }

            var isUser = await _userRepository.CheckEmailAdress(user.EmailAddress);
            if (isUser)
            {
                return BadRequest("User already exists.");
            }
            await _baseRepository.AddEntity(user);
            return Ok(new { message = "User successfully registered", userId = user.Id });
        }

        /// <summary>
        /// Get a user by their credentials
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A user</returns>
        [HttpPost("signin")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> SignInUser(UserCredentialsDTO userCred)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EmailAddress == userCred.EmailAddress
                                                                  && u.Password == userCred.Password);
            if (user != null)
            {
                user.LastLogIn = DateTime.UtcNow;
                await _context.SaveChangesAsync();
                return Ok(user);
            }

            return NotFound();
        }

        /// <summary>
        /// Get a user
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A user</returns>
        [HttpGet("get/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        public async Task<ActionResult> GetOneUser(Guid id)
        {
            var user = await _baseRepository.GetEntity(id);
            if (user != null)
            {
                return Ok(user);
            }

            return NotFound("User not found");
        }

        /// <summary>
        /// Delete a user
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpDelete("delete/{id}")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteOneUser(Guid id)
        {
            await _baseRepository.DeleteEntity(id);
            return NotFound();
        }

        /// <summary>
        /// Delete all users
        /// </summary>
        /// <returns></returns>
        [HttpDelete("deleteAll")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllUsers()
        {
            await _baseRepository.DeleteAllEntities();
            return NoContent();
        }


        /// <summary>
        /// Delete all users but not the Admin
        /// </summary>
        /// <returns></returns>
        [HttpDelete("delete")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllButAdmin()
        {
            var usersToDelete = await _context.Users
                .Where(user => user.Role != RoleNames.Admin)
                .ToListAsync();
            
            if(usersToDelete.Any())
            {
                _context.RemoveRange(usersToDelete);
                await _context.SaveChangesAsync();
            }

            return NoContent();
        }
    }
}
