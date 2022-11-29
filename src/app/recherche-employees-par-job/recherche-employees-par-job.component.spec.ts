import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEmployeesParJobComponent } from './recherche-employees-par-job.component';

describe('RechercheEmployeesParJobComponent', () => {
  let component: RechercheEmployeesParJobComponent;
  let fixture: ComponentFixture<RechercheEmployeesParJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheEmployeesParJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheEmployeesParJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
