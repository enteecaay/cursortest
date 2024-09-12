using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using KoiCareAtHome.API.Models;

namespace KoiCareAtHome.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            // TODO: Implement product retrieval from database
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Koi Food", Price = 19.99m },
                new Product { Id = 2, Name = "Water Test Kit", Price = 29.99m }
            };

            return Ok(products);
        }
    }
}