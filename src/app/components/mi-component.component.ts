import {Component} from '@angular/core'

@Component({selector: 'mi-component', template: `
<h1>Hola mundo soy mi-componente</h1>
<p>Esta es una prueba</p>
<hr/>
<h2>{{titulo}}</h2>
<p>{{comentario}}</p>
<h4>{{year}}</h4>

`})
export class MiComponent {
    public titulo: string;
    public comentario: String;
    public year: number;
    constructor(){
        console.log('Componente mi-component cargado !!!');
        this.titulo = 'Esta es una variable';
        this.comentario = 'Este es un comentario guardado en una variable';
        this.year =2020;
    }
}
