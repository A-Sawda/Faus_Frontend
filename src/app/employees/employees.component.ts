import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!:Employee[];
  searchTerm!: string;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.chargerEmployees();
  }

  chargerEmployees(){
    this.employeeService.listeEmployees()
    .subscribe(e=>{
      this.employees=e;
    })
  }

  supprimerEmployee(e: Employee) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.employeeService.supprimerEmployee(e.idEmployee).subscribe(() => {
        this.chargerEmployees();
      });
  }

}
