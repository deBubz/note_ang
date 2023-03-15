import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3NgrxComponent } from './p3-ngrx.component';

describe('P3NgrxComponent', () => {
  let component: P3NgrxComponent;
  let fixture: ComponentFixture<P3NgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3NgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3NgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
