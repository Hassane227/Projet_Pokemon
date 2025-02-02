import { Component,OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] =POKEMONS;
  pokemonSelected : Pokemon|undefined;
  ngOnInit(){
    console.table(this.pokemonList)

      
  }

  selectPokemon(pokemonid: String){
const pokemon:Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id==+pokemonid);

if(pokemon){

  console.log(`vous avez demander le pokemonc${pokemon.name}`);
  this.pokemonSelected=pokemon;

}
else{
  console.log(`vous avez demandé un pokemon qui n'existe pas`);
  this.pokemonSelected=pokemon;

}
       
  }
}
