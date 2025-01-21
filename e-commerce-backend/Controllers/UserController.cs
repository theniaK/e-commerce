﻿using e_commerce_backend.Context;
using e_commerce_backend.DTOs;
using e_commerce_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace e_commerce_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("post")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> PostUser(User user)
        {
            UserDTO UserDTO = new UserDTO
            {
                Id = Guid.NewGuid(),
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                EmailAddress = user.EmailAddress,
                Password = user.Password,
                Role = user.Role,
            };

            _context.Users.Add(UserDTO);
            await _context.SaveChangesAsync();

            return await Task.FromResult(NoContent());
        }
    }
}
