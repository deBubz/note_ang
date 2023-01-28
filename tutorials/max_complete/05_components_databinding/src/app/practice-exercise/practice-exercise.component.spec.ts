import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeExerciseComponent } from './practice-exercise.component';

describe('PracticeExerciseComponent', () => {
  let component: PracticeExerciseComponent;
  let fixture: ComponentFixture<PracticeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
