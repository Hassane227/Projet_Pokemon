import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] =POKEMONS;
  constructor(private route : Router){

  }
  goToPokemon(pokemon:Pokemon){
    this.route.navigate(['/pokemon',pokemon.id]);

  }

  


}
