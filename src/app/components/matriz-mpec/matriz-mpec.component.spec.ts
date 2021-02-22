import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizMpecComponent } from './matriz-mpec.component';

describe('MatrizMpecComponent', () => {
  let component: MatrizMpecComponent;
  let fixture: ComponentFixture<MatrizMpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizMpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizMpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
