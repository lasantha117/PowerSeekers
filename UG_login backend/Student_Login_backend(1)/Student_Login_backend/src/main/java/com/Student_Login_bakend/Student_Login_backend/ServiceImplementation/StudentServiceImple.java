package com.Student_Login_bakend.Student_Login_backend.ServiceImplementation;


import com.Student_Login_bakend.Student_Login_backend.Entity.Student;
import com.Student_Login_bakend.Student_Login_backend.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImple {
    @Autowired
    private StudentRepository studentRepository;


    public void save(Student student) {
        studentRepository.save(student);
    }


    public Student findByEmail(String email) {
        return studentRepository.findByEmail(email);
    }


    public boolean validateUser(String email, String password) {
        Student student = studentRepository.findByEmail(email);
        if (student == null) {
            return false;
        } else {
            return student.getPassword().equals(password);
        }
    }


}

