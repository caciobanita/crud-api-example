import React from "react";
import EmployeeRow from "./EmployeeRow";
import { observer } from "mobx-react";

@observer
class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.store.getEmployees();
  }
  render() {
    const { employees, removeEmployee } = this.props.store;
    return employees.map(employee => (
      <EmployeeRow
        key={employee.id}
        employee={employee}
        removeHandler={() => removeEmployee(employee.id)}
      />
    ));
  }
}

export default EmployeeList;
