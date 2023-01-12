import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingComponents3Component } from './practicing-components3.component';

describe('PracticingComponents3Component', () => {
  let component: PracticingComponents3Component;
  let fixture: ComponentFixture<PracticingComponents3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingComponents3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticingComponents3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
