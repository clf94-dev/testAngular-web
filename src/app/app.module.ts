import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MiComponent} from './components/mi-component/mi-component.component';
import {MiComponent2} from './components/mi-component2/mi-component2.component';
import { FilmsComponent } from './components/films/films.component';
import { HideMeComponent } from './components/hide-me/hide-me.component';

@NgModule({
    declarations: [
        AppComponent, MiComponent, MiComponent2, FilmsComponent, HideMeComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}