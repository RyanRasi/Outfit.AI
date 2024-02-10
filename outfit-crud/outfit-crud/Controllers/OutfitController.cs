using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using outfit_crud.Models;

namespace outfit_crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OutfitController : ControllerBase
    {
        private readonly OutfitContext _outfitContext;
        public OutfitController(OutfitContext outfitContext)
        {
            _outfitContext = outfitContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Outfit>>> GetOutfits()
        {
            if (_outfitContext.Outfits == null)
            {
                return NotFound();
            }
            return await _outfitContext.Outfits.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Outfit>> GetOutfit(int id)
        {
            if (_outfitContext.Outfits == null)
            {
                return NotFound();
            }
            var outfit = await _outfitContext.Outfits.FindAsync(id);
            if (outfit == null)
            {
                return NotFound();
            }
            return outfit;
        }
        [HttpPost]
        public async Task<ActionResult<Outfit>> PostOutfit(Outfit outfit)
        {
            _outfitContext.Outfits.Add(outfit);
            await _outfitContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOutfit), new { id = outfit.ID }, outfit);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> PutOutfit(int id, Outfit outfit)
        {
            if (id != outfit.ID)
            {
                return BadRequest();
            }
            _outfitContext.Entry(outfit).State = EntityState.Modified;
            try
            {
                await _outfitContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteOutfit(int id)
        {
            if(_outfitContext.Outfits == null)
            {
                return NotFound();
            }
            var outfit = await _outfitContext.Outfits.FindAsync(id);
            if(outfit == null)
            {
                return NotFound();
            }
            _outfitContext.Outfits.Remove(outfit);
            await _outfitContext.SaveChangesAsync();

            return Ok();
        }
     }
}