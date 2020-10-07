import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MiComponent} from './components/mi-component/mi-component.component';
import {MiComponent2} from './components/mi-component2/mi-component2.component';

@NgModule({
    declarations: [
        AppComponent, MiComponent, MiComponent2
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}