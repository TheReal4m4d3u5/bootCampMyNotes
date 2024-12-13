"use strict";
class Employee {
  
    employeeName: string;
    id: number;
    title: string; 
    salary: number;

    constructor(employeeNameArg: string, id: number, title: string, salary: number) {
      this.employeeName = employeeNameArg;
      this.id = id;
      this.title = title;
      this.salary = salary;
    }
    getFirstName() {
        return this.employeeName;
    }

}

export default Employee;





