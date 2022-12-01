import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';
import { Employee } from '../model/employee.model';
import { Job } from '../model/job.model';
import { EmployeeService } from '../services/employee.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  currentEmployee = new Employee();
  jobs!: Job[];
  jobId!: string;
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private jobServie: JobService
  ) { }

  ngOnInit(): void {
    this.employeeService.anEmployee(this.activatedRoute.snapshot.params['id']).
      subscribe(e => {
        this.jobId = e.job.idJob;
        this.currentEmployee = e;
      });
    this.jobServie.allJobs().
      subscribe(jobs => {
        this.jobs = jobs._embedded.jobs;
      }
      );
  }

  updateEmployee() {
    this.jobServie.aJob(this.jobId).subscribe(job => {
      this.currentEmployee.job = job;
      this.employeeService.updateEmployee(this.currentEmployee).subscribe(e => {
        this.router.navigate(['employees']);
      });
    });
  }

}
