import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { Employee } from '../model/employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  ajouterEmployee(e: Employee): Observable<Employee> {
    return this.http.post<Employee>(apiURL + "/employee", e, httpOptions);
  }

  listeEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiURL + "/employee");
  }

  consulterEmployee(id: number): Observable<Employee> {
    const url = `${apiURL + "/employee"}/${id}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(e: Employee): Observable<Employee> {
    return this.http.put<Employee>(apiURL + "/employee", e, httpOptions);
  }

  supprimerEmployee(id: number) {
    const url = `${apiURL + "/employee"}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  rechercherParJob(idJob: string): Observable<Employee[]> {
    const url = `${apiURL}/employee/jobemployees/${idJob}`;
    return this.http.get<Employee[]>(url);
  }
}
