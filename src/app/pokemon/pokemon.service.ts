import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  // Récupérer la liste des Pokémon
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((reponse) => this.log(reponse)), // Log des Pokémon
      catchError((error) => this.handleError(error, [])) // En cas d'erreur, retourne un tableau vide
    );
  }
  //ajout d'un pokemon
  addPokemon(pokemon: Pokemon): Observable<Pokemon>{

    const httpOptions= {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((reponse)=> this.log(reponse)),
      catchError((error)=>this.handleError(error,null))
      
    );
  }
  // recherche d'un pokemon
  searchPokemonList(term: String): Observable<Pokemon[]>{
    if(term.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((reponse)=> this.log(reponse)),
      catchError((error)=>this.handleError(error,[]))
       
    )
  }
//mis ajours 
  updatePokemon(pokemon: Pokemon):Observable<Pokemon|null>{
    const httpOptions= {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put('api/pokemons',pokemon, httpOptions).pipe(
      tap((reponse)=> this.log(reponse)),
      catchError((error)=>this.handleError(error,null))
    )
  }
  // supprimer un pokemon
  deletePokemonById(pokemonid: number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonid}`).pipe(
      tap((reponse)=> this.log(reponse)),
      catchError((error)=>this.handleError(error,null))
    )

  }
  // Récupérer un Pokémon par ID
  getPokemonByid(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((pokemon) => this.log(pokemon)), // Log du Pokémon
      catchError((error) => this.handleError(error, undefined)) // En cas d'erreur, retourne undefined
    );
  }

  // Log des réponses de l'API
  private log(response: any): void {
    console.table(response);
  }

  // Gestion des erreurs d'API
  private handleError(error: any, errorValue: any): Observable<any> {
    console.error(error); // Affiche l'erreur dans la console
    return of(errorValue); // Retourne un Observable contenant la valeur par défaut (tableau vide ou undefined)
  }

  // Liste des types de Pokémon
  getPokemonTypeList(): string[] {
    return [
      "Plante", "Poison", 
      "Feu", 
      "Eau", 
      "Insecte", 
      "Normal", 
      "Vol", 
      "Electrik", 
      "Fée"
    ];
  }
}
