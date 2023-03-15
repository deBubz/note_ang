import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1SimplePassingComponent } from './p1-simple-passing.component';

describe('P1SimplePassingComponent', () => {
  let component: P1SimplePassingComponent;
  let fixture: ComponentFixture<P1SimplePassingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1SimplePassingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1SimplePassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
