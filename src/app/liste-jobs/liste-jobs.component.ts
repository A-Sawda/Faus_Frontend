import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-liste-jobs',
  templateUrl: './liste-jobs.component.html',
  styleUrls: ['./liste-jobs.component.css']
})
export class ListeJobsComponent implements OnInit {

  ajout:boolean=true;
  jobs!: Job[];
  updatedJob: Job={idJob:'',statusJob:'',salaryMinJob:0,salaryMaxJob:0};
  searchTerm!: string;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.listeJobs().subscribe(jobs => {
      this.jobs = jobs._embedded.jobs;
    });
  }

  jobUpdated(job: Job) { 
    this.jobService.ajouterJob(job).subscribe(() => 
    this.chargerJobs()); 
  }

  jobCreated(job: Job) { 
    this.jobService.ajouterJob(job).subscribe(() => 
    this.chargerJobs()); 
  }

  chargerJobs() { 
    this.jobService.listeJobs().subscribe(jobs => { 
      this.jobs = jobs._embedded.jobs; console.log(jobs); 
    }); 
  }

  updateJob(job:Job) { 
    this.updatedJob=job; 
    this.ajout=false; 
  }

  supprimerJob(id:string){
    this.jobService.supprimerJob(id).subscribe(
      () => this.chargerJobs()
    );
  }

}
