import { NgModule } from '@angular/core' 
import { RouterModule,Routes } from '@angular/router'

import { MainPrincipalComponent } from "../components/main.component";
import { CharactersComponent } from "../components/characters.component";
import { CharacterDetailComponent } from "../components/character-detail.component";
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
