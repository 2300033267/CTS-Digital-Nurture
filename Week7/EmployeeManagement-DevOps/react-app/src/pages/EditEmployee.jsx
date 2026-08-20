import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function EditEmployee() {
  const navigate = useNavigate();
  const location = useLocation();

  const employee = location.state?.employee;

  const [formData, setFormData] = useState(
    employee || {
      id: "",
      name: "",
      department: "",
      salary: "",
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/api/employees/${formData.id}`,
        {
          name: formData.name,
          department: formData.department,
          salary: Number(formData.salary),
        }
      );

      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert("Failed to update employee");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold mb-4">
        Edit Employee
      </h2>

      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
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
              value={formData.department}
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
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Employee
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

export default EditEmployee;