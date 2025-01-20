using System.ComponentModel;
using e_commerce_backend.Enums;

namespace e_commerce_backend.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public int Price { get; set; }
        public string Image { get; set; } = "";
        public CategoryEnum? Category { get; set; } 

    }
}
