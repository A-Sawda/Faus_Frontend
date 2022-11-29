import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../model/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  newJob = new Job();

  constructor(private jobServie:JobService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addJob() {
    this.jobServie.ajouterJob(this.newJob)
      .subscribe(j => {
        this.router.navigate(['liste-jobs']);
      });
  }

}
