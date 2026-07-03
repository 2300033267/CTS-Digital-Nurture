package com.cts.HibernateDemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cts.HibernateDemo.entity.Employee;
import com.cts.HibernateDemo.repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    // Save Employee
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Get All Employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Get Employee by ID
    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    // Delete Employee
    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee Deleted Successfully";
    }

    // Update Employee
    public Employee updateEmployee(Employee employee) {
        return repository.save(employee);
    }
}