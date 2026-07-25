import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

function Employees() {

  const [search, setSearch] = useState("");

  const defaultEmployees = [
    { id: 101, name: "John", department: "IT", salary: 50000 },
    { id: 102, name: "Alice", department: "HR", salary: 45000 },
    { id: 103, name: "David", department: "Finance", salary: 60000 },
    { id: 104, name: "Sophia", department: "Marketing", salary: 55000 },
    { id: 105, name: "Michael", department: "Testing", salary: 48000 },
  ];

  const storedEmployees =
    JSON.parse(localStorage.getItem("employees")) || [];

  const employees = [...defaultEmployees, ...storedEmployees];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary mb-4">
        Employee List
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="row">

        {filteredEmployees.length > 0 ? (

          filteredEmployees.map((employee) => (

            <EmployeeCard
              key={employee.id}
              employee={employee}
            />

          ))

        ) : (

          <h3 className="text-center text-danger">
            No Employee Found
          </h3>

        )}

      </div>

    </div>
  );
}

export default Employees;