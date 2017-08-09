import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'principal-page',
  templateUrl: '../templates/main.component.html',
  styles: [
    `.container-inicial{
        height: 90%;
      }
    
    .img-initial{
      box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
    }
`
  ]
})

export class MainPrincipalComponent {}
