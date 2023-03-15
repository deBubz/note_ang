import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { P1SimplePassingComponent } from './p1-simple-passing/p1-simple-passing.component';
import { P2ServicesComponent } from './p2-services/p2-services.component';
import { P3NgrxComponent } from './p3-ngrx/p3-ngrx.component';
import { P1ListControlsComponent } from './p1-simple-passing/p1-list-controls/p1-list-controls.component';
import { P1ListComponent } from './p1-simple-passing/p1-list/p1-list.component';

@NgModule({
  declarations: [
    AppComponent,
    P1SimplePassingComponent,
    P1ListControlsComponent,
    P1ListComponent,

    P2ServicesComponent,

    P3NgrxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
