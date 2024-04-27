import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo2Component } from './trabajo2.component';

describe('Trabajo2Component', () => {
  let component: Trabajo2Component;
  let fixture: ComponentFixture<Trabajo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trabajo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trabajo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
