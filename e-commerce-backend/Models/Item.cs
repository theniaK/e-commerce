using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using e_commerce_backend.Enums;

namespace e_commerce_backend.Models
{
    public class Item
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Price { get; set; }
        public string Image { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;

    }
}
