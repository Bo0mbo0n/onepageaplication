import { Component, OnInit } from '@angular/core';

import { MinionsService, Minion } from '../../servicios/minions.service';

/*import si utilizas router en el boton
import { Router } from '@angular/router';*/



@Component({
  selector: 'app-minions',
  templateUrl: './minions.component.html'
})
export class MinionsComponent implements OnInit {

  minions:Minion[]=[];

  constructor( private _minionsService:MinionsService) {
    //console.log("constructor");
   }

   /* constructor por si utilizas el boton con routes
   constructor( private _minionsService:MinionsService,
                private router:Router 
  ) {
    //console.log("constructor");
   }*/


  ngOnInit() {
    //console.log("ngOnInit");
    this.minions = this._minionsService.getMinions();
    //console.log(this.minions);

  }

  /* método que se utiliza para utilizar las rutas en el boton
  verMinion( idx:number){
   this.router.navigate(['/minion',idx]);
  }*/

}
