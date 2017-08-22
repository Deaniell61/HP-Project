import { Component, OnInit, Input } from '@angular/core';
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HPCharactersService } from "../services/hp.service";

@Component({
  moduleId: module.id,
  selector: 'info',
  templateUrl: './../templates/info.component.html',
  styleUrls:['./../styles/info.component.css']
})

export class InfoComponent implements OnInit {
  @Input() character:any
  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private location:Location,
    private characterService:HPCharactersService) { }

  ngOnInit(): void {
    
  }
}
