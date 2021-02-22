import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeracionObjetivosComponent } from './enumeracion-objetivos.component';

describe('EnumeracionObjetivosComponent', () => {
  let component: EnumeracionObjetivosComponent;
  let fixture: ComponentFixture<EnumeracionObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeracionObjetivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumeracionObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
