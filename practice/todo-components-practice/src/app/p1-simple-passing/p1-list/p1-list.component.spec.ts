import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1ListComponent } from './p1-list.component';

describe('P1ListComponent', () => {
  let component: P1ListComponent;
  let fixture: ComponentFixture<P1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
