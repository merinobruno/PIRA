import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudaFormComponent } from './deuda-form.component';

describe('DeudaFormComponent', () => {
  let component: DeudaFormComponent;
  let fixture: ComponentFixture<DeudaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});