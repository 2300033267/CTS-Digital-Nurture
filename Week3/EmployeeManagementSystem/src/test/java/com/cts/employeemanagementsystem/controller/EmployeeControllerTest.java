package com.cts.employeemanagementsystem.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.cts.employeemanagementsystem.dto.EmployeeDTO;
import com.cts.employeemanagementsystem.entity.Employee;
import com.cts.employeemanagementsystem.repository.EmployeeRepository;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setup() {
        repository.deleteAll();
    }

    @Test
    public void testSaveEmployee_Success() throws Exception {
        EmployeeDTO dto = new EmployeeDTO(1, "John Doe", "Engineering", 75000.0);

        mockMvc.perform(post("/employee/save")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.department").value("Engineering"))
                .andExpect(jsonPath("$.salary").value(75000.0))
                .andExpect(jsonPath("$._links.self.href", containsString("/employee/1")))
                .andExpect(jsonPath("$._links.all-employees.href", containsString("/employee/all")));
    }

    @Test
    public void testSaveEmployee_ValidationFailure() throws Exception {
        EmployeeDTO dto = new EmployeeDTO(0, "", "", -100.0);

        mockMvc.perform(post("/employee/save")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.name", notNullValue()))
                .andExpect(jsonPath("$.department", notNullValue()))
                .andExpect(jsonPath("$.salary", notNullValue()));
    }

    @Test
    public void testGetAllEmployees() throws Exception {
        Employee emp1 = new Employee(1, "John Doe", "Engineering", 75000.0);
        Employee emp2 = new Employee(2, "Jane Smith", "HR", 60000.0);
        repository.save(emp1);
        repository.save(emp2);

        mockMvc.perform(get("/employee/all"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$._embedded.employeeDTOList", hasSize(2)))
                .andExpect(jsonPath("$._embedded.employeeDTOList[0].id").value(1))
                .andExpect(jsonPath("$._embedded.employeeDTOList[1].id").value(2))
                .andExpect(jsonPath("$._links.self.href", containsString("/employee/all")));
    }

    @Test
    public void testGetEmployeeById_Success() throws Exception {
        Employee emp = new Employee(1, "John Doe", "Engineering", 75000.0);
        repository.save(emp);

        mockMvc.perform(get("/employee/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$._links.self.href", containsString("/employee/1")));
    }

    @Test
    public void testGetEmployeeById_NotFound() throws Exception {
        mockMvc.perform(get("/employee/999"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Employee with ID 999 not found"))
                .andExpect(jsonPath("$.timestamp").exists())
                .andExpect(jsonPath("$.details").exists());
    }

    @Test
    public void testUpdateEmployee_Success() throws Exception {
        Employee emp = new Employee(1, "John Doe", "Engineering", 75000.0);
        repository.save(emp);

        EmployeeDTO updateDto = new EmployeeDTO(1, "John Doe Updated", "Engineering", 80000.0);

        mockMvc.perform(put("/employee/update")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDto)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John Doe Updated"))
                .andExpect(jsonPath("$.salary").value(80000.0));
    }

    @Test
    public void testUpdateEmployee_NotFound() throws Exception {
        EmployeeDTO updateDto = new EmployeeDTO(999, "No Name", "No Dept", 50000.0);

        mockMvc.perform(put("/employee/update")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDto)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Cannot update. Employee with ID 999 not found"));
    }

    @Test
    public void testDeleteEmployee_Success() throws Exception {
        Employee emp = new Employee(1, "John Doe", "Engineering", 75000.0);
        repository.save(emp);

        mockMvc.perform(delete("/employee/delete/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Employee Deleted Successfully"));
    }

    @Test
    public void testDeleteEmployee_NotFound() throws Exception {
        mockMvc.perform(delete("/employee/delete/999"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Cannot delete. Employee with ID 999 not found"));
    }
}
