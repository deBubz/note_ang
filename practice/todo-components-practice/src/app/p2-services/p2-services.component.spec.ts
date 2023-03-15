import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2ServicesComponent } from './p2-services.component';

describe('P2ServicesComponent', () => {
  let component: P2ServicesComponent;
  let fixture: ComponentFixture<P2ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2ServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
