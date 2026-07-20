package com.cts.employeemanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cts.employeemanagementsystem.dto.EmployeeDTO;
import com.cts.employeemanagementsystem.entity.Employee;
import com.cts.employeemanagementsystem.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/save")
    public ResponseEntity<EmployeeDTO> saveEmployee(@Valid @RequestBody EmployeeDTO employeeDTO) {

        Employee employee = convertToEntity(employeeDTO);
        Employee savedEmployee = service.saveEmployee(employee);

        return new ResponseEntity<>(convertToDTO(savedEmployee), HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(service.getAllEmployees());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable int id) {

        Employee employee = service.getEmployeeById(id);

        return ResponseEntity.ok(convertToDTO(employee));
    }

    @PutMapping("/update")
    public ResponseEntity<EmployeeDTO> updateEmployee(@Valid @RequestBody EmployeeDTO employeeDTO) {

        Employee employee = convertToEntity(employeeDTO);

        Employee updatedEmployee = service.updateEmployee(employee);

        return ResponseEntity.ok(convertToDTO(updatedEmployee));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {

        String result = service.deleteEmployee(id);

        return ResponseEntity.ok(result);
    }

    private EmployeeDTO convertToDTO(Employee employee) {

        EmployeeDTO dto = new EmployeeDTO();

        dto.setId(employee.getId());
        dto.setName(employee.getName());
        dto.setDepartment(employee.getDepartment());
        dto.setSalary(employee.getSalary());

        return dto;
    }

    private Employee convertToEntity(EmployeeDTO dto) {

        Employee employee = new Employee();

        employee.setId(dto.getId());
        employee.setName(dto.getName());
        employee.setDepartment(dto.getDepartment());
        employee.setSalary(dto.getSalary());

        return employee;
    }
}