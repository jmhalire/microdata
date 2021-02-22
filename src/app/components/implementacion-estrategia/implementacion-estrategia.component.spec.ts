import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacionEstrategiaComponent } from './implementacion-estrategia.component';

describe('ImplementacionEstrategiaComponent', () => {
  let component: ImplementacionEstrategiaComponent;
  let fixture: ComponentFixture<ImplementacionEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementacionEstrategiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementacionEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
