import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizCompetenciasComponent } from './matriz-competencias.component';

describe('MatrizCompetenciasComponent', () => {
  let component: MatrizCompetenciasComponent;
  let fixture: ComponentFixture<MatrizCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizCompetenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
