import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PracticeExerciseComponent } from './practice-exercise/practice-exercise.component';
import { EvenComponent } from './practice-exercise/even/even.component';
import { OddComponent } from './practice-exercise/odd/odd.component';
import { GameControlsComponent } from './practice-exercise/game-controls/game-controls.component';
import { MaxSolutionComponent } from './max-solution/max-solution.component';
import { ControlComponent } from './max-solution/control/control.component';
import { EvenComponent1 as MaxEven } from './max-solution/even/even.component';
import { OddComponent1 as MaxOdd } from './max-solution/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    PracticeExerciseComponent,
    EvenComponent,
    OddComponent,
    GameControlsComponent,
    MaxSolutionComponent,
    ControlComponent,
    MaxEven,
    MaxOdd
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
