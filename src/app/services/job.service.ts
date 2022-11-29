import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL, jobrestURL } from '../config';
import { Job } from '../model/job.model';
import { JobWrapper } from '../model/jobWrapper';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  allJobs(): Observable<JobWrapper> {
    return this.http.get<JobWrapper>(jobrestURL);
  }

  aJob(id: string): Observable<Job> {
    const url = `${apiURL + "/job"}/${id}`;
    return this.http.get<Job>(url);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(apiURL + "/job", job, httpOptions);
  }

  updateJob(job: Job): Observable<Job> {
    return this.http.put<Job>(apiURL + "/job", job, httpOptions);
  }

  /* supprimerJob(job: Job): Observable<Job> {
    return this.http.delete<Job>(apiURL + "/job", job, httpOptions);
  } */

  deleteJobById(id: string) {
    const url = `${apiURL}/job/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
