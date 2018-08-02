import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinionsService } from '../../servicios/minions.service';



@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html'
})
export class MinionComponent {

  minion:any={};

  constructor( private activatedRoute:ActivatedRoute,
               private _minionsService:MinionsService
    ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.minion=this._minionsService.getMinion(params['id']);

    });
   }

 

}
