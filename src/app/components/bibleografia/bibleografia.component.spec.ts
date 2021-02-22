import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleografiaComponent } from './bibleografia.component';

describe('BibleografiaComponent', () => {
  let component: BibleografiaComponent;
  let fixture: ComponentFixture<BibleografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
