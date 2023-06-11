import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplotirarComponent } from './ejemplotirar.component';

describe('EjemplotirarComponent', () => {
  let component: EjemplotirarComponent;
  let fixture: ComponentFixture<EjemplotirarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemplotirarComponent]
    });
    fixture = TestBed.createComponent(EjemplotirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
