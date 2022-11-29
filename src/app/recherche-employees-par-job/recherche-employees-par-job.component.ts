import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Job } from '../model/job.model';
import { EmployeeService } from '../services/employee.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-recherche-employees-par-job',
  templateUrl: './recherche-employees-par-job.component.html',
  styleUrls: ['./recherche-employees-par-job.component.css']
})
export class RechercheEmployeesParJobComponent implements OnInit {

  employees!: Employee[];
  idJob!: string;
  jobs!: Job[];

  constructor(private employeeService: EmployeeService, private jobService:JobService) { }
  
  ngOnInit(): void {
    this.jobService.listeJobs().
      subscribe(jobs => {
        this.jobs = jobs._embedded.jobs;
        this.idJob=this.jobs[0].idJob;
        this.onChange();
        console.log(jobs);
      });
  }

  onChange() {
    this.employeeService.rechercherParJob(this.idJob).
      subscribe(e => { this.employees = e });
  }

}
