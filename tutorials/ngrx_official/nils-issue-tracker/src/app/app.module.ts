import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { CounterComponent } from './components/counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewIssueComponent } from './new-issue/new-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NewIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 20 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
