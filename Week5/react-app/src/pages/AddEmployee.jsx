import { useState } from "react";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    salary: "",
  });

  function handleChange(e) {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const existingEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];

    existingEmployees.push(employee);

    localStorage.setItem(
      "employees",
      JSON.stringify(existingEmployees)
    );

    alert("Employee Added Successfully!");

    setEmployee({
      id: "",
      name: "",
      department: "",
      salary: "",
    });
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Add Employee
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Employee ID"
            name="id"
            value={employee.id}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Employee Name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Save Employee
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddEmployee;