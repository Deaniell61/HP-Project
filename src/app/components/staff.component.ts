import { Component, OnInit } from '@angular/core';
import { HPCharactersService } from "../services/hp.service";
import { Router } from "@angular/router";

@Component({
  selector: 'staff',
  templateUrl: './../templates/staff.component.html'
})

export class StaffComponent implements OnInit {
  selectedCharacter:any
  
    characters:any[]
  
    constructor(
                private service: HPCharactersService,
                private router:Router) {
    }
  
    onSelect(character:any){
      this.selectedCharacter = character;
    }
  
  
    ngOnInit() {
      // this.service.getHistoricalCharacters()
      //             .subscribe(data => this.characters = data)
      this.service.getHPStaff().then(response => {
        this.characters = response
      }).catch(error => console.log(error))
    }
  
    goToDetail(character:any) {
        this.router.navigate(['/character',character.name])
      }
}
