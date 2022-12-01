import { Component, OnInit } from '@angular/core';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';
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
  idJob: string="Tous";
  jobs!: Job[];
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

  constructor(
    private employeeService: EmployeeService,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.jobService.allJobs().subscribe(jobs => {
      this.jobs = jobs._embedded.jobs;
      this.jobs.push({idJob:"Tous",statusJob:"",salaryMaxJob:0,salaryMinJob:0});
    });
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.allEmployees().subscribe(e=>{
      this.employees=e;
    });
  }

  onChange() {
    if(this.idJob && this.idJob.length && this.idJob!="Tous"){
      this.employeeService.searchEmployeesByJobId(this.idJob).subscribe(e => {
        this.employees = e
      });
    }else{
      this.getAllEmployees();
    }
  }

}
