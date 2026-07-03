package com.cts.HibernateDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cts.HibernateDemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}