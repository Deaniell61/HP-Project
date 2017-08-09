import { NgModule } from '@angular/core' 
import { RouterModule,Routes } from '@angular/router'

import { MainPrincipalComponent } from "../components/main.component";
import { AppComponent } from "../app.component";

const routes: Routes = [
  {
    path: 'principal',
    component: MainPrincipalComponent
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  }
  // },
  // {
  //   path: '**',
  //   component: ''
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {}
