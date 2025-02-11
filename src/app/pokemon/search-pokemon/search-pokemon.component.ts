import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: false,
  
  templateUrl: './search-pokemon.component.html',
  styles: ``
})
export class SearchPokemonComponent implements OnInit {
searchTerms = new Subject<String>();//Subjet est une classe qui a paritent a la librerie rxjs
//elle permet de stocker des recherche sucésive de l'utilisateur dans un tableau de champ de caractere
// ce un flux de donner dans le temps avec la recherche de l'utlisateur{..."a".."ab"..."abz"..."ab"..."abc"}
pokemons$: Observable<Pokemon[]>// {...pokemonList(a)...pokemonListe(ab)...} et le $ au niveau de la varible signique ce un Observable

  constructor(
    private pokemonService: PokemonService,
    private route: Router){};
  ngOnInit(): void {
    //{..."a".."ab"..."abz"..."ab"..."abc"}
    this.pokemons$=this.searchTerms.pipe(
      debounceTime(300),
      //{....."ab"...."ab"....."abc" ...}
      distinctUntilChanged(),
      //{......"ab"........"abc"....}

      switchMap((term)=>this.pokemonService.searchPokemonList(term)),
      //{.......pokemonList"ab">..........pokemonList"abc">}

      // concatMap /mergeMap/SwitchMap
    )
      
  }

  search(term: String){
    this.searchTerms.next(term);

  }
goToDetail(pokemon: Pokemon){
  const link = ['/pokemon', pokemon.id]
  this.route.navigate(link);
}


}
