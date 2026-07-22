package com.cognizant.employeeservice.controller;

import com.cognizant.employeeservice.client.DepartmentClient;
import com.cognizant.employeeservice.entity.Employee;
import com.cognizant.employeeservice.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final DepartmentClient departmentClient;

    public EmployeeController(EmployeeService employeeService,
                              DepartmentClient departmentClient) {
        this.employeeService = employeeService;
        this.departmentClient = departmentClient;
    }

    // Get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // Get employee by ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    // Add employee
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    // Update employee
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,
                                   @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

    // Delete employee
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Employee deleted successfully";
    }

    // Call Department Service using Feign Client
    @GetMapping("/departments")
    public Object getDepartments() {
        return departmentClient.getDepartments();
    }
}