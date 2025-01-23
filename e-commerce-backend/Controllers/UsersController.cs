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
        /// Post a user to the DB
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("signup")]
        [ProducesResponseType(204)]
        public async Task<ActionResult> SignUpUser(User user)
        {
            UserDTO UserDTO = _mapper.Map<UserDTO>(user);
            await _context.Users.AddAsync(UserDTO);
            await _context.SaveChangesAsync();

            return await Task.FromResult(NoContent());
        }

        //[HttpPost("signin")]
        //public IActionResult SignInUser([FromBody] LoginModel model)
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
