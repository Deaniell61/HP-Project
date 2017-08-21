import { Component, OnInit } from '@angular/core';
import { HPCharactersService } from "../services/hp.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'hp-characters',
  templateUrl: './../templates/hp-characters.component.html'
})

export class CharactersComponent implements OnInit {
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
    this.service.getHPCharacters().then(response => {
      this.characters = response
    }).catch(error => console.log(error))
  }

  goToDetail(character:any) {
      this.router.navigate(['/character',character.name])
    }
}
