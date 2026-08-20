import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h6 className="text-secondary text-uppercase mb-4">
        Main Menu
      </h6>

      <Link to="/dashboard">
        <i className="bi bi-speedometer2 me-2"></i>
        Dashboard
      </Link>

      <Link to="/employees">
        <i className="bi bi-people me-2"></i>
        Employees
      </Link>

      <Link to="/departments">
        <i className="bi bi-building me-2"></i>
        Departments
      </Link>

      <Link to="/add-employee">
        <i className="bi bi-person-plus me-2"></i>
        Add Employee
      </Link>

      <Link to="/about">
        <i className="bi bi-info-circle me-2"></i>
        About
      </Link>
    </aside>
  );
}

export default Sidebar;