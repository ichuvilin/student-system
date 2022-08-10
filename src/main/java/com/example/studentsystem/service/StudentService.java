package com.example.studentsystem.service;

import com.example.studentsystem.entity.StudentEntity;
import com.example.studentsystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public StudentEntity saveStudent(StudentEntity student) {
        return studentRepo.save(student);
    }

    public List<StudentEntity> getAllStudents() {
        return studentRepo.findAll();
    }
}
