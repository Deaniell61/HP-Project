import { Component, OnInit } from '@angular/core';
import { HPCharactersService } from "../services/hp.service";
import { Router } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'houses',
  templateUrl: './../templates/houses.component.html',
  styles: [`
  .container-inicial{
        height: 90%;
        width: 100%;
      }
    
    .img-initial{
      box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
    }`]
})


export class HousesComponent implements OnInit {
  selectedCharacter:any
  
    houses:any[]
  
    constructor(
                private service: HPCharactersService,
                private router:Router) {
    }
  
    
  
  
    ngOnInit() {
      // this.service.getHistoricalCharacters()
      //             .subscribe(data => this.characters = data)
      this.service.getHPHouses().then(response => {
        this.houses = response
      }).catch(error => console.log(error))
    }
  
    goToCharacteresHouse(houses:any) {
        this.router.navigate(['/character/house',houses.name])
      }
}

