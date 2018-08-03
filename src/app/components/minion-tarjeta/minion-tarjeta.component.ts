import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minion-tarjeta',
  templateUrl: './minion-tarjeta.component.html',
  styleUrls: ['./minion-tarjeta.component.css']
})
export class MinionTarjetaComponent implements OnInit {

   @Input() minion: any = {};
@Input() index:number;

constructor(private router:Router) {
//console.log("constructor");
}
  ngOnInit() {

    
  }

verMinion(){
console.log(this.index);
this.router.navigate(['/minion',this.index]);

}



}
