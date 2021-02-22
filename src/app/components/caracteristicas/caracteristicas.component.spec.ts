import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasComponent } from './caracteristicas.component';

describe('CaracteristicasComponent', () => {
  let component: CaracteristicasComponent;
  let fixture: ComponentFixture<CaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
