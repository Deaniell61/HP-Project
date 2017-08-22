import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { MainPrincipalComponent } from "./components/main.component";
import { CharactersComponent } from "./components/characters.component";
import { CharacterDetailComponent } from "./components/character-detail.component";
import { StudentsComponent } from "./components/students.component";
import { StaffComponent } from "./components/staff.component";
import { CharactersHouseComponent } from "./components/characters-house.component";
import { HousesComponent } from "./components/houses.component";
import { WandsComponent } from "./components/wands.component";
import { InfoComponent } from "./components/info-character.component";

import { KeysPipe } from './pipes/keys.pipe';

import { HPCharactersService } from "./services/hp.service";

import { AppRoutesModule } from "./routes/app-routes.router";

@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule,
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
                  HousesComponent,
                  WandsComponent,
                  InfoComponent,
                  KeysPipe
                ],
  providers:    [ HPCharactersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
