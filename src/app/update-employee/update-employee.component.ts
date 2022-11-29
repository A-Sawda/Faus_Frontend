import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  updateIdJob!: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private jobServie: JobService) { }

  ngOnInit(): void {
    this.employeeService.consulterEmployee(this.activatedRoute.snapshot.params['id']).
      subscribe(e => {
        this.updateIdJob = e.job.idJob;
        this.currentEmployee = e;
      });
    this.jobServie.listeJobs().
      subscribe(jobs => {
        this.jobs = jobs._embedded.jobs;
      }
      );
  }

  updateEmployee() {
    this.jobServie.consulterJob(this.updateIdJob).subscribe(job => {
      this.currentEmployee.job = job;
      this.employeeService.updateEmployee(this.currentEmployee).subscribe(e => {
        this.router.navigate(['employees']);
      });
    });
  }

}
