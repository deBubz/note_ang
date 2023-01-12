import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingComponents2Component } from './practicing-components2.component';

describe('PracticingComponents2Component', () => {
  let component: PracticingComponents2Component;
  let fixture: ComponentFixture<PracticingComponents2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingComponents2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticingComponents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
