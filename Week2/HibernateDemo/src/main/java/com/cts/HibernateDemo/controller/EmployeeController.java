package com.cts.HibernateDemo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cts.HibernateDemo.entity.Employee;
import com.cts.HibernateDemo.service.EmployeeService;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // Save Employee
    @GetMapping("/save")
    public String saveEmployee() {

        Employee employee = new Employee();
        employee.setId(1);
        employee.setName("Bhagya");
        employee.setSalary(50000);

        service.saveEmployee(employee);

        return "Employee Saved Successfully";
    }

    // Get All Employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    // Get Employee By ID
    @GetMapping("/employee/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {
        return service.getEmployeeById(id);
    }

    // Update Employee
    @PutMapping("/update")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return service.updateEmployee(employee);
    }

    // Delete Employee
    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id) {
        return service.deleteEmployee(id);
    }
}