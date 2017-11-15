import axios from "axios";
import { observable, action } from "mobx";

class EmployeeStore {
  @observable employees = [];

  @action.bound
  createEmployee(employee) {
    axios
      .post("http://localhost:3002/employees", employee)
      .then(response => {
        this.employees.push(response.data);
      })
      .catch(error => console.log(error));
  }

  @action.bound
  getEmployees() {
    axios
      .get("http://localhost:3002/employees")
      .then(response => (this.employees = response.data))
      .catch(error => console.log(error));
  }

  @action.bound
  removeEmployee(id) {
    axios
      .delete(`http://localhost:3002/employees/${id}`)
      .then(response => {
        console.log(this);
        this.employees = this.employees.filter(employee => employee.id !== id);
      })
      .catch(error => console.log(error));
  }
}

export default EmployeeStore;
