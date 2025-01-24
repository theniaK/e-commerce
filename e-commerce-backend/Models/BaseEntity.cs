using System.ComponentModel.DataAnnotations;

namespace e_commerce_backend.Models
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
    }
}
