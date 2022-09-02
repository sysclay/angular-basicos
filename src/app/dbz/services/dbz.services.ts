import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    constructor(){
        // console.log('welcome service')
    }

    private _personajes: Personaje[]=[
        {
          nombre:'Goku',
          poder:1500
        },
        {
          nombre:'Vegeta',
          poder:1500
        },
        {
          nombre:'Gohan',
          poder:1250
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje)
    }
}