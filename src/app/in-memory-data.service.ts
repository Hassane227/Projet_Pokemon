import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';  // import correct
import { POKEMONS } from './pokemon/mock-pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {  // Implémentation correcte de InMemoryDbService

  // Cette méthode crée la base de données en mémoire avec les Pokémon
  createDb() {
    const pokemons = POKEMONS;
    console.table(pokemons)
    return { pokemons };  // Retourne un objet avec la clé 'pokemon' qui contient la liste des Pokémon
  }

}
