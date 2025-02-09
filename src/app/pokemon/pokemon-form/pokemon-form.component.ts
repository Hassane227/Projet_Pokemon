import { Component, Input, input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  standalone: false,
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
  
})
export class PokemonFormComponent  implements OnInit{
  @Input() pokemon: Pokemon;// donc  notre composant peut prendre un pokemon en paramettre
  types: string[];

  constructor(private router: Router,private pokemonService: PokemonService){};
  ngOnInit() {
    // pokemnTypeListe
    this.types = this.pokemonService.getPokemonTypeList();
      
  }
  //la fonction hastype permet de renvoyer un boolean si le pokemon a ce type ou pas
  hasType(type: string): boolean{

    return this.pokemon.types.includes(type);// includes est une methode js defaire la verification


  }
  // lorsque l'utilisateur va cocher ou decocher une case
  selectType($event: Event, type:string){
        const isChecked: boolean = ($event.target as HTMLInputElement).checked;
        if(isChecked){
          this.pokemon.types.push(type)
        }else{
          const index = this.pokemon.types.indexOf(type);
          this.pokemon.types.splice(index,1);
        }
  }
  onSubmit(){
    this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>this.router.navigate(['/pokemon',this.pokemon.id]) );

    //this.router.navigate(['/pokemon',this.pokemon.id]);

  }
  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length>2 && !this.hasType(type))
    {
      return false
    }

    return true;

  }

}
