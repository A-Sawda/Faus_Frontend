import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJobsComponent } from './liste-jobs.component';

describe('ListeJobsComponent', () => {
  let component: ListeJobsComponent;
  let fixture: ComponentFixture<ListeJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
