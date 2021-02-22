import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionEstrategiaComponent } from './aplicacion-estrategia.component';

describe('AplicacionEstrategiaComponent', () => {
  let component: AplicacionEstrategiaComponent;
  let fixture: ComponentFixture<AplicacionEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionEstrategiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
