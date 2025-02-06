import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, InitialNavigation } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  standalone: false,
  
  template: `
   <h2 class="header center"> Editer {{pokemon?.name}}</h2>
   <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture">
   </p>
   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,//    <app-pokemon-form></app-pokemon-form> remplace le formulaire

  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(private route : ActivatedRoute,
    private pokemonService: PokemonService
  ){}
ngOnInit(): void {
    const pokemonid: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonid){
      this.pokemon = this.pokemonService.getPokemonByid(+pokemonid);
    }else {
      this.pokemon= undefined;
    }
}

}
