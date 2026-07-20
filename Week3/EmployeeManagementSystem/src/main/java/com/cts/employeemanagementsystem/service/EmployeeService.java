package com.cts.employeemanagementsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.employeemanagementsystem.entity.Employee;
import com.cts.employeemanagementsystem.exception.EmployeeNotFoundException;
import com.cts.employeemanagementsystem.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with ID " + id + " not found"));
    }

    public Employee updateEmployee(Employee employee) {
        if (!repository.existsById(employee.getId())) {
            throw new EmployeeNotFoundException("Cannot update. Employee with ID " + employee.getId() + " not found");
        }
        return repository.save(employee);
    }

    public String deleteEmployee(int id) {
        if (!repository.existsById(id)) {
            throw new EmployeeNotFoundException("Cannot delete. Employee with ID " + id + " not found");
        }
        repository.deleteById(id);
        return "Employee Deleted Successfully";
    }
}