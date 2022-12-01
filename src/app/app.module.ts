import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchEmployeesByJobComponent } from './search-employees-by-job/search-employees-by-job.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddUpdateJobComponent } from './add-update-job/add-update-job.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddJobComponent } from './add-job/add-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesComponent,
    UpdateEmployeeComponent,
    SearchEmployeesByJobComponent,
    JobsComponent,
    AddUpdateJobComponent,
    SearchFilterPipe,
    AddJobComponent,
    UpdateJobComponent,
    HomeComponent,
    ForbiddenComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
