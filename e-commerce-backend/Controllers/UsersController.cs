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

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Post a user to the DB
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("signup")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> SignUpUser(User user)
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

        //[HttpPost("login")]
        //public IActionResult Login([FromBody] LoginModel model)
        //{
        //    var user = _userService.ValidateUser(model.Username, model.Password);
        //    if (user == null)
        //    {
        //        return Unauthorized("Invalid credentials");
        //    }

        //    var token = GenerateJwtToken(user);  // Method to generate a JWT token
        //    return Ok(new { Token = token });
        //}
    }
}
