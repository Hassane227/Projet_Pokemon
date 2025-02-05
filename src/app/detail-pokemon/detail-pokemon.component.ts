import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent  implements OnInit{

  pokemonList: Pokemon[]= POKEMONS;
  ;
  pokemon: Pokemon|undefined;
  constructor(private rout : ActivatedRoute, private router : Router){}
  ngOnInit(){
    const pokemonid: string|null = this.rout.snapshot.paramMap.get('id');
    if(pokemonid){
    this.pokemon  = this.pokemonList.find(pokemon=>pokemon.id== + pokemonid);

    } 
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons'])

  }
}
