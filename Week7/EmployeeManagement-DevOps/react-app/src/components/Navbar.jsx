import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4 shadow-sm">
      <Link to="/" className="navbar-brand fw-bold">
        <i className="bi bi-people-fill me-2"></i>
        Employee Management System
      </Link>

      <span className="text-white">
        Admin Panel
      </span>
    </nav>
  );
}

export default Navbar;