const departments = [
  {
    id: 1,
    name: "IT",
    head: "John",
    employees: 20,
  },
  {
    id: 2,
    name: "HR",
    head: "Alice",
    employees: 8,
  },
  {
    id: 3,
    name: "Finance",
    head: "David",
    employees: 10,
  },
  {
    id: 4,
    name: "Marketing",
    head: "Sophia",
    employees: 15,
  },
];

function Departments() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-4">
        Departments
      </h2>

      <div className="row">
        {departments.map((dept) => (
          <div className="col-md-3 mb-4" key={dept.id}>
            <div className="card shadow text-center">
              <div className="card-body">
                <h4>{dept.name}</h4>

                <p>
                  <strong>Head:</strong> {dept.head}
                </p>

                <p>
                  <strong>Employees:</strong> {dept.employees}
                </p>

                <button className="btn btn-success">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;