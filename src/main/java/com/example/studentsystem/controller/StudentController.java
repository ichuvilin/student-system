package com.example.studentsystem.controller;

import com.example.studentsystem.entity.StudentEntity;
import com.example.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody StudentEntity student) {
        studentService.saveStudent(student);
        return "New student is add";
    }

    @GetMapping("/getAll")
    public List<StudentEntity> getALl() {
        return studentService.getAllStudents();
    }

}
