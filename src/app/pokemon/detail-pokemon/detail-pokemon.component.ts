import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

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
  constructor(private rout : ActivatedRoute, private router : Router,
    private pokemonService: PokemonService,
  ){}
  ngOnInit(){
    const pokemonid: string|null = this.rout.snapshot.paramMap.get('id');
    if(pokemonid){
     this.pokemonService.getPokemonByid(+pokemonid).subscribe(pokemon=> this.pokemon=pokemon);

    } 
  }

  delectePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(()=> this.goToPokemonList() )

  }
  goToPokemonList(){
    this.router.navigate(['/pokemons'])

  }

gotoEditPokemon(pokemon: Pokemon){
  this.router.navigate(['edit/pokemon',pokemon.id])
}
}
