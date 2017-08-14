import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { MainPrincipalComponent } from "./components/main.component";
import { CharactersComponent } from "./components/characters.component";
import { CharacterDetailComponent } from "./components/character-detail.component";
import { StudentsComponent } from "./components/students.component";
import { StaffComponent } from "./components/staff.component";
import { CharactersHouseComponent } from "./components/characters-house.component";
import { HousesComponent } from "./components/houses.component";

import { HPCharactersService } from "./services/hp.service";

import { AppRoutesModule } from "./routes/app-routes.router";

@NgModule({
  imports:      [ 
                  BrowserModule,
                  HttpModule,
                  AppRoutesModule 
                ],
  declarations: [ 
                  AppComponent,
                  MainPrincipalComponent,
                  CharactersComponent,
                  CharacterDetailComponent,
                  StaffComponent,
                  StudentsComponent,
                  CharactersHouseComponent,
                  HousesComponent
                ],
  providers:    [ HPCharactersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
