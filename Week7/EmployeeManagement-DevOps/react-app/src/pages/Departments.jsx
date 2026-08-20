function Departments() {
  const departments = [
    "IT",
    "HR",
    "Finance",
    "Marketing",
    "Testing",
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold">
        Departments
      </h2>

      <div className="card shadow mt-4">
        <div className="card-body">
          {departments.map((department, index) => (
            <div
              key={index}
              className="border-bottom p-3"
            >
              {department}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;