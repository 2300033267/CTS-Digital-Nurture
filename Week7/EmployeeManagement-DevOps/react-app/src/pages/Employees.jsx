import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import {
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "../api/employeeService";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load employees");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.id !== id));
      alert("Employee deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete employee");
    }
  }

  async function handleEdit(employee) {
    const newName = prompt("Enter Employee Name", employee.name);
    if (newName === null) return;

    const newDepartment = prompt(
      "Enter Department",
      employee.department
    );
    if (newDepartment === null) return;

    const newSalary = prompt("Enter Salary", employee.salary);
    if (newSalary === null) return;

    try {
      const updatedEmployee = {
        name: newName,
        department: newDepartment,
        salary: Number(newSalary),
      };

      const response = await updateEmployee(
        employee.id,
        updatedEmployee
      );

      setEmployees(
        employees.map((emp) =>
          emp.id === employee.id ? response.data : emp
        )
      );

      alert("Employee updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update employee");
    }
  }

  const filteredEmployees = employees.filter((emp) => {
    const value = search.toLowerCase();

    return (
      emp.name.toLowerCase().includes(value) ||
      emp.department.toLowerCase().includes(value) ||
      emp.id.toString().includes(value)
    );
  });

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="text-primary fw-bold">
          Employee List
        </h2>

        <span className="badge bg-primary fs-6">
          Total Employees: {employees.length}
        </span>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredEmployees.length > 0 ? (

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      ) : (

        <div className="alert alert-danger text-center mt-4">
          No Employee Found
        </div>

      )}

    </div>
  );
}

export default Employees;