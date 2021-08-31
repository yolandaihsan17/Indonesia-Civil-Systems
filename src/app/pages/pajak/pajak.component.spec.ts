import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PajakComponent } from './pajak.component';

describe('PajakComponent', () => {
  let component: PajakComponent;
  let fixture: ComponentFixture<PajakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PajakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PajakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
