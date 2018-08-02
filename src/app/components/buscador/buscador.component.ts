import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinionsService } from '../../servicios/minions.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  minions:any[] = []
  termino:string;


  constructor( private activatedRoute:ActivatedRoute,
               private _minionsService:MinionsService) {

                }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
     this.termino=params['termino'];
      this.minions = this._minionsService.buscarMinions( params ['termino'] );
      console.log(this.minions);
    });
  }

}
