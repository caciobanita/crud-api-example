import React from "react";
import EmployeeRow from "./EmployeeRow";
import { connect } from "react-redux";
import { getEmployees } from "../reducers/employees";
import { removeEmployee } from "../reducers/employees";

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    const { employees, removeEmployee } = this.props;
    return employees.map(employee => (
      <EmployeeRow
        key={employee.id}
        employee={employee}
        removeHandler={removeEmployee}
      />
    ));
  }
}

const mapStateToProps = state => ({
  employees: state.employees.items
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees()),
  removeEmployee: id => dispatch(removeEmployee(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
