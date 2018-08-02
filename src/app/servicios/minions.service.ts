import { Injectable } from '@angular/core';

@Injectable()
export class MinionsService {

    private minions:Minion[] = [
        {
          nombre: "Bob",
          bio: "Bob es uno de los Minions, y es el deuteragonista en la película Minions. Como a todos los minions, le gusta la banana. Bob es bajito regordete y tiene heterocromía (un ojo es verde y el otro marrón). Muchas veces puede verse con su osito de peluche llamado Tim, que es marrón con ojos amarillos de botón.",
          img: "assets/img/bob.png"
        },
        {
          nombre: "Stuart",
          bio: "Stuart tiene un solo ojo marron , y siempre tiene su cabello peinado para los lados. Stuart es muy gracioso y juguetón. Es muy bueno jugando videojuegos como Dave. También puede ser el más sincero e inocente de los minions. Sin embargo, también parece que tiene una actitud rebelde. Es visto como un vago por los otros Minions, ya que prefiere relajarse y tocar la guitarra a escuchar y seguir reglas. Además, siempre tiene hambre. Se puede ver en los Minions como trata de comerse a Kevin y a Bob, pensando que eran bananas.",
          img: "assets/img/stuart.png"
        },
    
        {
          nombre: "Kevin",
          bio: "Sir Kevin (antes conocido como Kevin), es el protagonista y el mayor de los Minions. Kevin es un minion alto, con dos ojos y con el cabello largo peinado hacia arriba. Usualmente se puede ver con su uniforme de golf. A Kevin le encanta hacer bromas de la gente o de otros Minions. También le encanta jugar al golf. En la película de Minions, Kevin es el líder del trio que está en la búsqueda del nuevo jefe. Para Kevin, es sumamente importante la riqueza y el bienestar de los Minions.",
          img: "assets/img/kevin.png"
        }
      ];

constructor(){

    console.log("Servicio listo para ser ejecutado muajajaja");
}

getMinions(){
    return this.minions;
}

getMinion( idx:string){
    return this.minions[idx];
}

buscarMinions( termino:string){
    let minionsArr:Minion[]=[];
    termino=termino.toLowerCase();
    for (let minion of this.minions){
        let nombre= minion.nombre.toLowerCase();
        if (nombre.indexOf(termino)>=0){
            minionsArr.push(minion)
        }
    }
    return minionsArr;
}

}

export interface Minion{
    nombre: string;
    bio:string;
    img:string;
};
