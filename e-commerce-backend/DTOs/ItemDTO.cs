using System.ComponentModel.DataAnnotations;

namespace e_commerce_backend.DTOs
{
    public class ItemDTO
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public double Price { get; set; }
        public string Image { get; set; } = "";
        public string Category { get; set; } = "";
    }
}
