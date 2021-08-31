import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaruratComponent } from './darurat.component';

describe('DaruratComponent', () => {
  let component: DaruratComponent;
  let fixture: ComponentFixture<DaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
