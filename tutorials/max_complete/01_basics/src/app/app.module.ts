import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { WarningAlertComponent } from './practicing-components1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './practicing-components1/success-alert/success-alert.component';
import { PracticingComponents1Component } from './practicing-components1/practicing-components1.component';
import { FormsModule } from '@angular/forms';
import { PracticingComponents2Component } from './practicing-components2/practicing-components2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    PracticingComponents1Component,
    PracticingComponents2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
