package com.Student_Login_bakend.Student_Login_backend.Service;


import com.Student_Login_bakend.Student_Login_backend.Entity.Student;

public interface Service {
    void save(Student student);
    Student findByEmail(String email);
    boolean validateUser(String email, String password);
}
