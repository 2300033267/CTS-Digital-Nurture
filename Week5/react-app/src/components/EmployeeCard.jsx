function EmployeeCard({ employee }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow">

        <div className="card-body">

          <h4>{employee.name}</h4>

          <hr />

          <p>
            <strong>ID:</strong> {employee.id}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Salary:</strong> ₹{employee.salary}
          </p>

          <button
            className="btn btn-primary"
            onClick={() =>
              alert(
                `Employee: ${employee.name}\nDepartment: ${employee.department}\nSalary: ₹${employee.salary}`
              )
            }
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default EmployeeCard;