import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonService {
  pokemonList: Pokemon[] =POKEMONS;
  pokemon : Pokemon|undefined ;

  constructor() { }

  getPokemonList (): Pokemon[]{
      return POKEMONS;
  }

  getPokemonByid(id: number):Pokemon|undefined{
      return this.pokemonList.find(pokemon=>pokemon.id == id);;


  }

  getPokemonTypeList(): string[]{
   
    const typesSet = new Set<string>();

    this.pokemonList.forEach(pokemon => {
        pokemon.types.forEach(type => typesSet.add(type));
    });

    return Array.from(typesSet);
  }
}
