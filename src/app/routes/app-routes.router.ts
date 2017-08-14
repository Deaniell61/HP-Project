import { NgModule } from '@angular/core' 
import { RouterModule,Routes } from '@angular/router'

import { MainPrincipalComponent } from "../components/main.component";
import { CharactersComponent } from "../components/characters.component";
import { CharacterDetailComponent } from "../components/character-detail.component";
import { StudentsComponent } from "../components/students.component";
import { StaffComponent } from "../components/staff.component";
import { CharactersHouseComponent } from "../components/characters-house.component";
import { HousesComponent } from "../components/houses.component";
import { AppComponent } from "../app.component";

const routes: Routes = [
  {
    path: 'principal',
    component: MainPrincipalComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'houses',
    component: HousesComponent
  },
  {
    path: 'character/house/:name',
    component: CharactersHouseComponent
  },
  {
    path: 'character/:name',
    component: CharacterDetailComponent
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: MainPrincipalComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {}
