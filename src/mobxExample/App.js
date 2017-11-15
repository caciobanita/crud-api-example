import React from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeStore from "./store";

const store = new EmployeeStore();

const App = () => (
  <div>
    <EmployeeForm store={store}/>
    <EmployeeList store={store} />
  </div>
);

export default App;
