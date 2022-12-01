import { Component, OnInit } from '@angular/core';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';
import { Employee } from '../model/employee.model';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: Employee[];
  searchTerm!: string;
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

  constructor(
    private employeeService: EmployeeService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.allEmployees()
      .subscribe(e => {
        this.employees = e;
      })
  }

  deleteEmployeeById(e: Employee) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.employeeService.deleteEmployeeById(e.idEmployee).subscribe(() => {
        this.getAllEmployees();
      });
  }

}
