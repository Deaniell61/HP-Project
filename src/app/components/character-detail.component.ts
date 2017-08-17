import { Component,Input, OnInit } from '@angular/core';
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HPCharactersService } from "../services/hp.service";

import { WandsComponent } from "./wands.component";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'character-detail',
  templateUrl: './../templates/character-detail.component.html',
  styles: [`
  .container-inicial{
        height: 90%;
        width: 100%;
      }
    
    .img-initial{
      box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
    }
    
.nameChar{
  margin-left: 30%;
}`]
})

export class CharacterDetailComponent implements OnInit {
  @Input() character:any
  selCharacter:any
    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private location:Location,
        private characterService:HPCharactersService){

    }

    ngOnInit(): void {
      this.route.params
        .switchMap((params: ParamMap) => this.characterService.getHPCharacter(params['name']))
        .subscribe(character => this.character = character);
    }
      
    onSelect(character:any){
      this.selCharacter = character;
      console.log(character.image)
    }

    goBack(): void {
      this.location.back();
    }
}
