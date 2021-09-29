import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamistaFormComponent } from './prestamista-form.component';

describe('PrestamistaFormComponent', () => {
  let component: PrestamistaFormComponent;
  let fixture: ComponentFixture<PrestamistaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamistaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
