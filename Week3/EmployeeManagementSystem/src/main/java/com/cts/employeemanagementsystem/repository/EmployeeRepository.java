package com.cts.employeemanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cts.employeemanagementsystem.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}