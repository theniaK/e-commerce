using System.ComponentModel.DataAnnotations;

namespace e_commerce_backend.DTOs
{
    public class UserDTO
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string EmailAddress { get; set; } = "";
        public string Password { get; set; } = "";
        public int PhoneNumber { get; set; }
        public string Role { get; set; } = "";
    }
}
