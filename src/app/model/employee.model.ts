import { Job } from "./job.model";

export class Employee{
    idEmployee!:number;
	sexEmployee!:string;
	brithdayEmployee!:Date;
	firstNameEmployee!:string;
	lastNameEmployee!:string;
	fullNameEmployee!:string;
	salaryEmployee!:number;
	hiringDateEmployee!:Date;
    job!:Job;
}