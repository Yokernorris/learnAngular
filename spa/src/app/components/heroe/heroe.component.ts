import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import  {Heroe} from  '../../services/heroes.service';

import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:Heroe;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    //obtenemos de la quieri el parametro id
    this._activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
}
