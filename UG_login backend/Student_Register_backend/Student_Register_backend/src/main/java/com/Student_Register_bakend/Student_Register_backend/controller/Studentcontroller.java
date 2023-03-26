package com.Student_Register_bakend.Student_Register_backend.controller;

import com.Student_Register_bakend.Student_Register_backend.Service.StudentService;
import com.Student_Register_bakend.Student_Register_backend.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class Studentcontroller {
    @Autowired
    private StudentService studentServiceService;

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new Student());
        return "register";
    }

    @PostMapping("/register")
    public String processRegistrationForm(Student student) {
        StudentService.saveStudent(student);
        return "redirect:/login";
    }

}
