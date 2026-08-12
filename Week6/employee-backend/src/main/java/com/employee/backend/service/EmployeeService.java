package com.employee.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.backend.entity.Employee;
import com.employee.backend.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public void deleteEmployee(Integer id) {
        repository.deleteById(id);
    }
}