var express = require("express");
var app = express();

app.use(express.json());

let employees = [
  { id: "1", name: "John Smith", gender: "Male" },
  { id: "2", name: "Karen Jones", gender: "Female" }
];


// Generates an ID
function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// return the list of employees
app.get("/employees", function(req, res) {
  res.json(employees);
});

app.post("/employees", function(req, res) {
  let employee = req.body;
  employee.id = makeId();
  employees.push(employee);
  res.status(201).json(employee);
});

// remove employee
app.delete("/employees/:id", function(req, res) {
  employees = employees.filter(function(employee) {
    return employee.id !== req.params.id;
  });
  res.sendStatus(204);
});

app.listen(3002, function() {
  console.log("Server listening on port 3002");
});
