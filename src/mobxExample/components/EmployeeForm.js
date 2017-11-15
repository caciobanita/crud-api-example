import React from "react";
import { observer } from "mobx-react";

@observer
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "Female"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeGender = this.changeGender.bind(this);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeGender(event) {
    this.setState({ gender: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.createEmployee(this.state);
    this.setState({ name: "", gender: "Female" });
  }

  render() {
    const { name, gender } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={name} onChange={this.changeName} />
        <select value={gender} onChange={this.changeGender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default EmployeeForm;