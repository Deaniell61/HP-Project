import { Component, OnInit, Input } from '@angular/core';
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HPCharactersService } from "../services/hp.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'characters-house',
  templateUrl: './../templates/characters-house.component.html'
})

export class CharactersHouseComponent implements OnInit {
  @Input() characters:any[]
  selectedCharacter:any
  
  
    constructor(
                private service: HPCharactersService,
                private router:Router,
                private route:ActivatedRoute,
                private location:Location) {
    }
  
    onSelect(character:any){
      this.selectedCharacter = character;
    }
  
  
    ngOnInit() {
      this.route.params
      .switchMap((params: ParamMap) => this.service.getHPCharactersHouse(params['name']))
      .subscribe(character => this.characters = character);

    }
  
    goToDetail(character:any) {
        this.router.navigate(['/character',character.name])
      }

    goBack(): void {
      this.location.back();
    }
      
}
