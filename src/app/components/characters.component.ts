import { Component, OnInit } from '@angular/core';
import { HPCharactersService } from "../services/hp.service";

@Component({
  selector: 'hp-characters',
  templateUrl: 'templates/hp-characters.component.html'
})

export class NameComponent implements OnInit {
  constructor(private service: HPCharactersService) { }

  ngOnInit() {
    this.service.getHPCharacters().then(characters => {
      this.characters = characters.slice(1, 6)
    }).catch(error => console.log(error))
   }
}
