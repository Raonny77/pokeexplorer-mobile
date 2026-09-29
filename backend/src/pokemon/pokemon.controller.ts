import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.pokemonService.findOne(name);
  }
}
