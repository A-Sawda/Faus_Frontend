import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeesByJobComponent } from './search-employees-by-job.component';

describe('RechercheEmployeesParJobComponent', () => {
  let component: SearchEmployeesByJobComponent;
  let fixture: ComponentFixture<SearchEmployeesByJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchEmployeesByJobComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeesByJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
