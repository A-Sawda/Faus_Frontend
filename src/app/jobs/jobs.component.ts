import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  addJobBool: boolean = true;
  jobs!: Job[];
  job: Job = { idJob: '', statusJob: '', salaryMinJob: 0, salaryMaxJob: 0 };
  searchTerm!: string;

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.jobService.allJobs().subscribe(jobs => {
      this.jobs = jobs._embedded.jobs;
    });
  }

  jobUpdated(job: Job) {
    this.jobService.updateJob(job).subscribe(() =>
      this.getAllJobs());
  }

  jobCreated(job: Job) {
    this.jobService.addJob(job).subscribe(() =>
      this.getAllJobs());
  }

  getAllJobs() {
    this.jobService.allJobs().subscribe(jobs => {
      this.jobs = jobs._embedded.jobs; console.log(jobs);
    });
  }

  updateJob(job: Job) {
    this.job = job;
    this.addJobBool = false;
  }

  deleteJobById(id: string) {
    this.jobService.deleteJobById(id).subscribe(
      () => this.getAllJobs()
    );
  }

}
