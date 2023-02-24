package UG_WebApplication.question.controllers;
import UG_WebApplication.question.entity.answers;
import UG_WebApplication.question.services.answersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@CrossOrigin("http://localhost:4200/")
@RestController
public class answerController {


    @Autowired
    answersService answersService;




    @GetMapping("getAnswers")
    public List<answers> getAnswers() {
        return answersService.getAnswers();

    }

    @PostMapping("addAnswers")
    public answers SaveAnswers(@RequestBody answers answers){
        return answersService.SaveAnswers(answers);
    }

}
