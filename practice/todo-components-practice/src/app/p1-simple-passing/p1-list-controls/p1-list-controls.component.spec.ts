import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1ListControlsComponent } from './p1-list-controls.component';

describe('P1ListControlsComponent', () => {
  let component: P1ListControlsComponent;
  let fixture: ComponentFixture<P1ListControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1ListControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1ListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
