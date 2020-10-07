import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hide-me',
  templateUrl: './hide-me.component.html',
  styleUrls: ['./hide-me.component.scss']
})
export class HideMeComponent implements OnInit, OnDestroy {
public showTitle : boolean;
  constructor() {
    this.showTitle = true;
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  hideClicked(){
  this.showTitle = false ;
  }
  showClicked(){
    this.showTitle = true;
  }
}
