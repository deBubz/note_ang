import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { WarningAlertComponent } from './practicing-components1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './practicing-components1/success-alert/success-alert.component';
import { PracticingComponents1Component } from './practicing-components1/practicing-components1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    PracticingComponents1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
