import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo3Component } from './trabajo3.component';

describe('Trabajo3Component', () => {
  let component: Trabajo3Component;
  let fixture: ComponentFixture<Trabajo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trabajo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trabajo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
