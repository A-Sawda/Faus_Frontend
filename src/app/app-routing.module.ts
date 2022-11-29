import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EmployeesComponent } from './employees/employees.component';
import { ListeJobsComponent } from './liste-jobs/liste-jobs.component';
import { RechercheEmployeesParJobComponent } from './recherche-employees-par-job/recherche-employees-par-job.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateJobComponent } from './update-job/update-job.component';

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full" },
  {path:"employees", component:EmployeesComponent},
  {path: "add-employee", component : AddEmployeeComponent},
  {path: "update-employee/:id", component: UpdateEmployeeComponent},
  {path: "recherche-employee-par-job", component: RechercheEmployeesParJobComponent},
  {path: "liste-jobs", component: ListeJobsComponent},
  {path: "add-job", component: AddJobComponent},
  {path: "update-job/:id", component: UpdateJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
