import React from "react";

const EmployeeRow = ({ employee, removeHandler }) => (
  <div>
    <span>Name: {employee.name}</span>, <span>Gender: {employee.gender}</span>{" "}
    <button onClick={() => removeHandler(employee.id)}>Remove me</button>
  </div>
);

export default EmployeeRow;
