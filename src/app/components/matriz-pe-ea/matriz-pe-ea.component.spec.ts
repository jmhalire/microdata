import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizPeEaComponent } from './matriz-pe-ea.component';

describe('MatrizPeEaComponent', () => {
  let component: MatrizPeEaComponent;
  let fixture: ComponentFixture<MatrizPeEaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizPeEaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizPeEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
