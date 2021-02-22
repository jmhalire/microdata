import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaFilosoficaComponent } from './etapa-filosofica.component';

describe('EtapaFilosoficaComponent', () => {
  let component: EtapaFilosoficaComponent;
  let fixture: ComponentFixture<EtapaFilosoficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaFilosoficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaFilosoficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
