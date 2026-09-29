import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

const POKEAPI = 'https://pokeapi.co/api/v2';

@Injectable()
export class PokemonService {
  // Busca na PokéAPI e converte falhas em erros HTTP com sentido para o app.
  private async fetchPokeApi(path: string) {
    let res: Response;
    try {
      res = await fetch(`${POKEAPI}${path}`);
    } catch {
      throw new BadGatewayException('Não foi possível acessar a PokéAPI.');
    }
    if (res.status === 404) throw new NotFoundException('Pokémon não encontrado.');
    if (!res.ok) throw new BadGatewayException(`PokéAPI respondeu ${res.status}.`);
    return res.json();
  }

  async findAll() {
    const data = await this.fetchPokeApi('/pokemon?limit=20');

    return data.results.map((p: any, i: number) => ({
      name: p.name,
      index: i + 1,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
    }));
  }

  async findOne(name: string) {
    const p = await this.fetchPokeApi(`/pokemon/${encodeURIComponent(name.toLowerCase())}`);

    const sprite =
      p.sprites.other?.['official-artwork']?.front_default ||
      p.sprites.front_default;

    return {
      name: p.name,
      sprite,
      types: p.types.map((t: any) => t.type.name),
      weight: p.weight / 10,
      height: p.height / 10,
      abilities: p.abilities.slice(0, 3).map((a: any) => a.ability.name),
    };
  }
}
