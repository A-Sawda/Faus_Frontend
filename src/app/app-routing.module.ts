import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { SearchEmployeesByJobComponent } from './search-employees-by-job/search-employees-by-job.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateJobComponent } from './update-job/update-job.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "search-employees-by-job", component: SearchEmployeesByJobComponent },
  { path: "jobs", component: JobsComponent },
  { path: "add-job", component: AddJobComponent },
  { path: "update-job/:id", component: UpdateJobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
