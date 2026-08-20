function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-primary fw-bold mb-3">
          About Employee Management System
        </h2>

        <p>
          This Employee Management System is a full-stack web
          application used to manage employee information.
        </p>

        <h5>Technologies Used</h5>

        <ul>
          <li>React.js</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>Axios</li>
          <li>Docker</li>
        </ul>

        <p>
          The application allows users to add, view, update,
          and delete employee information.
        </p>
      </div>
    </div>
  );
}

export default About;