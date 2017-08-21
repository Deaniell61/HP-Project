import { Component, OnInit } from '@angular/core';
import { HPCharactersService } from "../services/hp.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'students',
  templateUrl: './../templates/students.component.html'
})

export class StudentsComponent implements OnInit {
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
      
      this.service.getHPStudents().then(response => {
        this.characters = response
      }).catch(error => console.log(error))
    }
  
    goToDetail(character:any) {
        this.router.navigate(['/character',character.name])
      }
}

