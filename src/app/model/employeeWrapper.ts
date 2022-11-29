import { Employee } from "./employee.model";

export class EmployeeWrapper {
    _embedded!: { employees: Employee[] };
}