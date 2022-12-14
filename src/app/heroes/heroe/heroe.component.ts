import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponente{
    nombre:string='Iroman';
    edad:number=29;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spiderman'
    }

    cambiarEdad():void{
        this.edad=35
    }
}