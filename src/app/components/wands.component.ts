import { Component, OnInit, Input } from '@angular/core';
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HPCharactersService } from "../services/hp.service";

@Component({
  selector: 'wands',
  templateUrl: './../templates/wands.component.html',
  styleUrls:['./../styles/wands.component.css']
})

export class WandsComponent implements OnInit {
  @Input() character:any
  wands:any
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private location:Location,
    private characterService:HPCharactersService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: ParamMap) => this.characterService.getHPWand(params['name']))
      .subscribe(wands => this.wands = wands);
  }
}
