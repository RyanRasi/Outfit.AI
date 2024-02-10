using System;
using Microsoft.EntityFrameworkCore;

namespace outfit_crud.Models
{
	public class OutfitContext : DbContext
	{
		public OutfitContext(DbContextOptions<OutfitContext> options) : base(options)
		{

		}
		public DbSet<Outfit> Outfits { get; set; }
	}
}

