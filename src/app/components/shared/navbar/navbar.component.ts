import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  buscarMinion( termino:string){
   // console.log(termino);
    //this.minions = this._minionsService.getMinions();
    this.router.navigate(['/buscar', termino]);
  }

}
