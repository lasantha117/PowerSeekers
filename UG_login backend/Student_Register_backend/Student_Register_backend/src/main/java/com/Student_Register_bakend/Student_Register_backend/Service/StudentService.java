package com.Student_Register_bakend.Student_Register_backend.Service;


import com.Student_Register_bakend.Student_Register_backend.entity.Student;
import com.Student_Register_bakend.Student_Register_backend.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

   @Autowired
    private static BCryptPasswordEncoder passwordEncoder;

    public Student findByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

    public static Student saveStudent(Student student) {
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        Student savedStudent;
        savedStudent = StudentRepository.<Student>Save(student);
        return savedStudent;
    }

}