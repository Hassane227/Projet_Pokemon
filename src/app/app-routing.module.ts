import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {path:'pokemons', component: ListPokemonComponent},
  {path:'pokemon/:id', component: DetailPokemonComponent},
  {path: '' , redirectTo:'pokemons', pathMatch:'full'}// pour la liste par defaut on laisse le path vide et mettre une redirectionTo ='le chemin' 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 