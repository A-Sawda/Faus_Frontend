import { Job } from "./job.model";

export class JobWrapper {
    _embedded!: { jobs: Job[] };
}