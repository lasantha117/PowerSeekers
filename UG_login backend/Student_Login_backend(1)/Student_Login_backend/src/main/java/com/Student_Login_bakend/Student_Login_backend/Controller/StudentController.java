package com.Student_Login_bakend.Student_Login_backend.Controller;

import com.Student_Login_bakend.Student_Login_backend.Entity.Student;
import com.Student_Login_bakend.Student_Login_backend.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class StudentController {
    @Autowired
    private Service studentService;

    @GetMapping("/")
    public String showLoginPage(Model model) {
        model.addAttribute("student", new Student());
        return "login";
    }

    @PostMapping("/login")
    public String validateLogin(@Validated @ModelAttribute("student") Student student, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "login";
        } else {
            boolean isValidUser = studentService.validateUser(student.getEmail(), student.getPassword());
            if (isValidUser) {
                return "success";
            } else {
                return "login";
            }
        }
    }
}

