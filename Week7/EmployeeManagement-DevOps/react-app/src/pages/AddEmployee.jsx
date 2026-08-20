import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/employees", {
        name: employee.name,
        department: employee.department,
        salary: Number(employee.salary),
      });

      alert("Employee added successfully!");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold mb-4">
        Add Employee
      </h2>

      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={employee.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={employee.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              name="salary"
              className="form-control"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddEmployee;