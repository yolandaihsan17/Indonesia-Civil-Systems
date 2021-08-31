import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KesehatanComponent } from './kesehatan.component';

describe('KesehatanComponent', () => {
  let component: KesehatanComponent;
  let fixture: ComponentFixture<KesehatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KesehatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KesehatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
