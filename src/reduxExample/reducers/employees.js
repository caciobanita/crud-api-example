import axios from "axios";

// Constants
const LOAD = "my-app/employees/LOAD";
const CREATE = "my-app/employees/CREATE";
const REMOVE = "my-app/employees/REMOVE";

const initialState = { items: [] };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, items: action.employees };
    case REMOVE:
      let employees = state.items.filter(function(employee) {
        return employee.id !== action.id;
      });
      return { ...state, items: employees };
    case CREATE:
      return { ...state, items: [...state.items, action.employee] };
    default:
      return state;
  }
}

export function createEmployee(employee) {
  return dispatch =>
    axios
      .post("http://localhost:3001/employees", employee)
      .then(response => dispatch({ type: CREATE, employee: response.data }))
      .catch(error => console.log(error));
}

export function removeEmployee(id) {
  return dispatch =>
    axios
      .delete(`http://localhost:3001/employees/${id}`)
      .then(response => dispatch({ type: REMOVE, id: id }))
      .catch(error => console.log(error));
}

export function getEmployees() {
  return dispatch =>
    axios
      .get("http://localhost:3001/employees")
      .then(response => dispatch({ type: LOAD, employees: response.data }))
      .catch(error => console.log(error));
}
