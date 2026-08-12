import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/editemployee" element={<EditEmployee />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;