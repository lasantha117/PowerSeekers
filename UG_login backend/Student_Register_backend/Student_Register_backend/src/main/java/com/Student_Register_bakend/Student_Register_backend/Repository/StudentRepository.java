package com.Student_Register_bakend.Student_Register_backend.Repository;

import com.Student_Register_bakend.Student_Register_backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {


    static Student Save(Student student) {
    return student;}

    Student findByEmail(String email);
}
