import { Component, OnInit,  DoCheck } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit, DoCheck {
public contador: number;
  constructor() {this.contador=0; }

  ngOnInit(): void {
  }

  ngDoCheck (){
//Hook que actualiza la vista al ocurrir un cambio
  }

  buttonClicked() {
  this.contador++;
}
}
