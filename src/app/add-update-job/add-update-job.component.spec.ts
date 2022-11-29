import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateJobComponent } from './add-update-job.component';

describe('AddUpdateJobComponent', () => {
  let component: AddUpdateJobComponent;
  let fixture: ComponentFixture<AddUpdateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateJobComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddUpdateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
