import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <FaUsers className="me-2" />
          Employee Management System
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/employees">
              Employees
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/departments">
              Departments
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/addemployee">
              Add Employee
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;