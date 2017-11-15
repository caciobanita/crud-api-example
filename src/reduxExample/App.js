import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <EmployeeForm />
          <EmployeeList />
        </div>
      </Provider>
    );
  }
}

export default App;
