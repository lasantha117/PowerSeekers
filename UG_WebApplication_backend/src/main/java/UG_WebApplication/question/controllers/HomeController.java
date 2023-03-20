package UG_WebApplication.question.controllers;

import UG_WebApplication.question.entity.question;
import UG_WebApplication.question.entity.vacancy;
import UG_WebApplication.question.services.questionService;
import UG_WebApplication.question.services.vacancyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class HomeController {

    @Autowired
    questionService questionService;

    @Autowired
    vacancyService vacancyService;


    @GetMapping("getQuestion")
    public List<question> getQuestion() {
        return questionService.getQuestion();

    }

    @PostMapping("addQuestion")
    public question SaveQuestion(@RequestBody question question){
       return questionService.SaveQuestion(question);
    }

    @GetMapping("getVacancy")
    public List<vacancy> getVacancy() {
        return vacancyService.getVacancy();

    }


}

