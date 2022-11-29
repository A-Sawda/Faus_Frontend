import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RechercheEmployeesParJobComponent } from './recherche-employees-par-job/recherche-employees-par-job.component';
import { ListeJobsComponent } from './liste-jobs/liste-jobs.component';
import { AddUpdateJobComponent } from './add-update-job/add-update-job.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddJobComponent } from './add-job/add-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesComponent,
    UpdateEmployeeComponent,
    RechercheEmployeesParJobComponent,
    ListeJobsComponent,
    AddUpdateJobComponent,
    SearchFilterPipe,
    AddJobComponent,
    UpdateJobComponent
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
