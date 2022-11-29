import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../model/job.model';

@Component({
  selector: 'app-add-update-job',
  templateUrl: './add-update-job.component.html',
  styleUrls: ['./add-update-job.component.css']
})
export class AddUpdateJobComponent implements OnInit {

  @Input() addJobBool!: boolean;
  @Input() job!: Job;
  @Output() jobUpdated = new EventEmitter<Job>();
  @Output() jobCreated = new EventEmitter<Job>();

  constructor() { }

  ngOnInit(): void {
  }

  updateJob() {
    this.jobUpdated.emit(this.job);
  }

  createJob() {
    this.jobCreated.emit(this.job);
  }

}
