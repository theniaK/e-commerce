﻿using AutoMapper;
using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Helpers;
using e_commerce_backend.Models;
using e_commerce_backend.Repositories;
using e_commerce_backend.Resources;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IBaseRepository<User> _baseRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(
            ApplicationDbContext context, 
            IMapper mapper, 
            IBaseRepository<User> baseRepository, 
            IUserRepository userRepository, 
            IConfiguration config, 
            IPasswordHasher passwordHasher)
        {
            _context = context;
            _mapper = mapper;
            _baseRepository = baseRepository;
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
        }

        /// <summary>
        /// Post user
        /// </summary>
        /// <param name="userDto"></param>
        /// <returns>200 if succeed; otherwise 400 Bad Request response.</returns>
        [HttpPost("signup")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public async Task<ActionResult> SignUpUser(UserDTO userDto)
        {
            if (userDto == null)
            {
                return BadRequest("Model received is not valid");
            }

            string saltString = SaltGenerator.GenerateSalt(); // Generate salt
            var user = _mapper.Map<User>(userDto);
            user.LastLogIn = DateTime.UtcNow;
            user.PasswordSalt = saltString; // Store salt in database
            user.Password = _passwordHasher.HashPassword(userDto.Password, saltString); // Hash password with salt

            var isUser = await _userRepository.CheckEmailAdressAsync(user.EmailAddress);
            if (isUser)
            {
                return BadRequest("User already exists.");
            }

            await _baseRepository.AddEntityAsync(user);
            return Ok(new { message = "User successfully registered", userId = user.Id });
        }

        /// <summary>
        /// Get a user by their credentials
        /// </summary>
        /// <param name="userCred"></param>
        /// <returns>The user if found; otherwise, a 404 Not Found response.</returns>
        [HttpPost("signin")]
        [ProducesResponseType(200)]
        [ProducesResponseType(401)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> SignInUser(UserCredentialsDTO userCred)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EmailAddress == userCred.EmailAddress);

            if (user == null)
            {
                return NotFound("Invalid credentials");
            }

            // Hash the entered password using the stored salt
            string enteredHashedPassword = _passwordHasher.HashPassword(userCred.Password, user.PasswordSalt);
            byte[] enteredHashBytes = System.Text.Encoding.UTF8.GetBytes(enteredHashedPassword);
            byte[] storedHashBytes = System.Text.Encoding.UTF8.GetBytes(user.Password);

            // Compare the newly computed hash with the stored hash
            if (CryptographicOperations.FixedTimeEquals(enteredHashBytes, storedHashBytes))
            {
                user.LastLogIn = DateTime.UtcNow;
                await _baseRepository.SaveAsync();
                return Ok(user);
            }

            return Unauthorized("Invalid credentials.");
        }

        /// <summary>
        /// Get a user by id
        /// </summary>
        /// <param name="id">The unique identifier of the user.</param>
        /// <returns>The user if found; otherwise, a 404 Not Found response.</returns>
        [HttpGet("user/{id}")]
        [ProducesResponseType(typeof(User), 200)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> GetOneUser(Guid id)
        {
            var user = await _baseRepository.GetEntityAsync(id);
            if (user != null)
            {
                return Ok(user);
            }

            return NotFound("User not found");
        }

        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns>>The user list.</returns>
        [HttpGet("users")]
        [ProducesResponseType(200)]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            IEnumerable<User> items = await _baseRepository.GetEntitiesAsync();
            return Ok(items.ToList());
        }

        /// <summary>
        /// Delete a user by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>No content if deleted; otherwise, a 404 Not Found response; otherwise 400 Bad Request if user is admin.</returns>
        [HttpDelete("user/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> DeleteOneUser(Guid id)
        {
            var user = await _baseRepository.GetEntityAsync(id);
            if(user != null && user.Role == RoleNames.Admin)
            {
                return BadRequest("You are not authorized to delete an admin!");
            }

            if (user == null)
            {
                return NotFound($"No user was found with the id: {id}!");
            }

            await _baseRepository.DeleteEntityAsync(id);
            return NoContent();
        }

        /// <summary>
        /// Delete all users
        /// </summary>
        /// <returns>No content response if succesful.</returns>
        //[Authorize]
        [HttpDelete("users")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> DeleteAllUsers()
        {
            await _baseRepository.DeleteAllEntitiesAsync();
            return NoContent();
        }


        /// <summary>
        /// Delete all users but not the Admin
        /// </summary>
        /// <returns>No content if succesful; otherwise 404 Not Found response.</returns>
        [HttpDelete("allButAdmin")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> DeleteAllButAdmin()
        {
            var usersToDelete = await _context.Users
                .Where(user => user.Role != RoleNames.Admin)
                .ToListAsync();
            
            if(usersToDelete.Any())
            {
                _context.RemoveRange(usersToDelete);
                await _baseRepository.SaveAsync();
                return NoContent();
            }

            return NotFound("There are no users to be deleted");
        }
    }
}
