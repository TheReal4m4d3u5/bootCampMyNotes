// TODO: Have the ZooWorker class inherit Employee properties
import Employee from './Employee.js';


class ZooWorker extends Employee{
  constructor(employeeName: string, id: number, title: string, salary: number, private cleanUniform: boolean) {
    super(employeeName); 
    super(id);
    super(title);
    super(salary);

    this.cleanUniform = cleanUniform;
  }

  getName(): string {
    return this.employeeName;
  }
  getID(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getSalary(): number {
    return this.salary;
  }

  getCleanUniform(): boolean {
    return this.cleanUniform;
  }
}
export default ZooWorker;
