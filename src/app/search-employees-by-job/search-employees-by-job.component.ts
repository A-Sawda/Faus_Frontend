import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Job } from '../model/job.model';
import { EmployeeService } from '../services/employee.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-search-employees-by-job',
  templateUrl: './search-employees-by-job.component.html',
  styleUrls: ['./search-employees-by-job.component.css']
})
export class SearchEmployeesByJobComponent implements OnInit {

  employees!: Employee[];
  idJob!: string;
  jobs!: Job[];

  constructor(
    private employeeService: EmployeeService,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.jobService.allJobs().subscribe(jobs => {
      this.jobs = jobs._embedded.jobs;
      this.idJob = this.jobs[0].idJob;
      this.onChange();
    });
  }

  onChange() {
    this.employeeService.searchEmployeesByJobId(this.idJob).subscribe(e => {
      this.employees = e
    });
  }

}
