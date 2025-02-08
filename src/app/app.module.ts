import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  // il faut faire tres attention a l'ordre qu'on declare les route car y a certain route qui bloc d'autre
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule,
    HttpClientModule ,// Import du module HTTP    PokemonModule, // importer les modules dans il faut aussi importer les module par ordre de route
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) // Simule un petit délai
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
