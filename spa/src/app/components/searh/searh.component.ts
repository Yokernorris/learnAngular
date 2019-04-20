import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
})
export class SearhComponent implements OnInit {
  heroes:Heroe[] = [];
  termino:string;


  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(this.termino); // termino por que asi lo pone en la ruta
    })
  }

}
