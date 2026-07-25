import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-4 fw-bold text-primary">
        Employee Management System
      </h1>

      <p className="lead mt-3">
        Manage Employees and Departments efficiently using
        React, Spring Boot and Microservices.
      </p>

      <div className="mt-4">

        <Link
          to="/employees"
          className="btn btn-primary btn-lg me-3"
        >
          View Employees
        </Link>

        <Link
          to="/addemployee"
          className="btn btn-success btn-lg"
        >
          Add Employee
        </Link>

      </div>

      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000"
        className="img-fluid rounded shadow mt-5"
        alt="office"
      />

    </div>
  );
}

export default Home;