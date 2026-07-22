package com.cognizant.employeeservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "DEPARTMENT-SERVICE")
public interface DepartmentClient {

    @GetMapping("/departments")
    Object getDepartments();
}