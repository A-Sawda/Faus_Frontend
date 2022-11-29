import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Job } from '../model/job.model';
import { EmployeeService } from '../services/employee.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  jobs!: Job[];
  newEmployee = new Employee();
  newJob!: Job;
  newJobId!: string;

  constructor(
    private employeeService: EmployeeService,
    private jobServie: JobService, private router: Router
  ) { }

  ngOnInit(): void {
    this.jobServie.allJobs().
      subscribe(jobs => {
        this.jobs = jobs._embedded.jobs;
      });
  }

  addEmployee() {
    this.newEmployee.job = this.jobs.find(job => job.idJob == this.newJobId)!;
    this.employeeService.addEmployee(this.newEmployee)
      .subscribe(e => {
        this.router.navigate(['employees']);
      });
  }

}
