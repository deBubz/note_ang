import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingComponents1Component } from './practicing-components1.component';

describe('PracticingComponents1Component', () => {
  let component: PracticingComponents1Component;
  let fixture: ComponentFixture<PracticingComponents1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingComponents1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticingComponents1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
