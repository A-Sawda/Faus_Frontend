import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: Employee[];
  searchTerm!: string;

  constructor(
    private employeeService: EmployeeService
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
