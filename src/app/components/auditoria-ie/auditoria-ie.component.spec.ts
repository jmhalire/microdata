import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaIeComponent } from './auditoria-ie.component';

describe('AuditoriaIeComponent', () => {
  let component: AuditoriaIeComponent;
  let fixture: ComponentFixture<AuditoriaIeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriaIeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
