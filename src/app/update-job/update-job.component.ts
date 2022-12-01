import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  currentJob = new Job();
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

  constructor(
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.jobService.aJob(this.activatedRoute.snapshot.params['id']).
      subscribe(e => {
        this.currentJob = e;
      });
  }

  updateJob() {
    this.jobService.updateJob(this.currentJob).subscribe(e => {
      this.router.navigate(['jobs']);
    });
  }

}
