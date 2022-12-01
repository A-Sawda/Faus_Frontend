import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EmployeesComponent } from './employees/employees.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddEmployeeGuard } from './guards/add-employee.guard';
import { AddJobGuard } from './guards/add-job.guard';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchEmployeesByJobComponent } from './search-employees-by-job/search-employees-by-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateJobComponent } from './update-job/update-job.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "add-employee", component: AddEmployeeComponent, canActivate: [AddEmployeeGuard] },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "search-employees-by-job", component: SearchEmployeesByJobComponent },
  { path: "jobs", component: JobsComponent },
  { path: "add-job", component: AddJobComponent, canActivate: [AddJobGuard] },
  { path: "update-job/:id", component: UpdateJobComponent },
  { path: "login", component: LoginComponent },
  { path: "app-forbidden", component: ForbiddenComponent },
  { path: "logout", component: LogoutComponent },
  { path: "sign-up", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
