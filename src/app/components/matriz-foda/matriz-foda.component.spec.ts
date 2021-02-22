import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizFodaComponent } from './matriz-foda.component';

describe('MatrizFodaComponent', () => {
  let component: MatrizFodaComponent;
  let fixture: ComponentFixture<MatrizFodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizFodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizFodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
