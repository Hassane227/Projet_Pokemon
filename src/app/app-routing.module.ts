import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '' , redirectTo:'login', pathMatch:'full'},// pour la liste par defaut on laisse le path vide et mettre une redirectionTo ='le chemin' 
   { path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}// path: '**' nous permet d'intercepter tous les routes  il faut toujours le declarrer en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 