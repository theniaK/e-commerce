using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using e_commerce_backend.Enums;

namespace e_commerce_backend.Models
{
    public class Item
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public double Price { get; set; }
        public string Image { get; set; } = "";
        public string Category { get; set; } = ""; 

    }
}
