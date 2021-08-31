import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KependudukanComponent } from './kependudukan.component';

describe('KependudukanComponent', () => {
  let component: KependudukanComponent;
  let fixture: ComponentFixture<KependudukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KependudukanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KependudukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
