package com.Student_Login_bakend.Student_Login_backend.Repository;

import com.Student_Login_bakend.Student_Login_backend.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
   Student findByEmail(String email);
}