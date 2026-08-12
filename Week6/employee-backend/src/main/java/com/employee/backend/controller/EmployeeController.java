package com.employee.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.backend.entity.Employee;
import com.employee.backend.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping
    public List<Employee> getEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Integer id) {
        return service.getEmployeeById(id);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.saveEmployee(employee);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Integer id,
                                   @RequestBody Employee employee) {
        employee.setId(id);
        return service.saveEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Integer id) {
        service.deleteEmployee(id);
    }
}