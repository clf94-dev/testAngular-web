import {Component} from '@angular/core'

@Component({
    selector: 'mi-component2',
     templateUrl: './mi-component2.component.html'
})
export class MiComponent2 {
    public titulo: string;
    public comentario: String;
    public year: number;
    constructor(){
        console.log('Componente mi-component2 cargado !!!');
        this.titulo = 'Esta es una variable';
        this.comentario = 'Este es un comentario guardado en una variable';
        this.year =2030;
    }
}
