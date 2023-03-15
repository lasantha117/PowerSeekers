package UG_WebApplication.question.controllers;

import UG_WebApplication.question.entity.answers;
import UG_WebApplication.question.entity.question;
import UG_WebApplication.question.services.answersService;
import UG_WebApplication.question.services.questionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;





@CrossOrigin("http://localhost:4200/")
@RestController
class questionController{


    final
    questionService questionService;

    public questionController(questionService questionService) {
        this.questionService = questionService;
    }


    @GetMapping("getQuestion")
    public List<question> getQuestion() {
        return questionService.getQuestion();

    }

    @PostMapping("addQuestion")
    public question SaveQuestion(@RequestBody question question)
    {


       return questionService.SaveQuestion(question);
    }


    @DeleteMapping("deleteQuestion")
   public void deleteQuestion(@RequestParam String q_id){
            questionService.deleteQuestion(q_id);
   }


//-------------------editquestion---------

    @PutMapping("updateQuestion")
    public ResponseEntity<question> updateQuestionById(@PathVariable(value = "q_id") String q_id, @RequestBody question question) {
        try {
            question updatedQuestion = questionService.updateQuestion(q_id, question);
            return ResponseEntity.ok(updatedQuestion);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }






}

@CrossOrigin("http://localhost:4200/")
@RestController
class answerController {


    final
    answersService answersService;

    public answerController(answersService answersService) {
        this.answersService = answersService;
    }


    @GetMapping("getAnswers")
   public List<answers> getAnswers() {
       return answersService.getAnswers();

   }


    @PostMapping("addAnswers")
    public answers SaveAnswers(@RequestBody answers answers) {
        return answersService.SaveAnswers(answers);

    }

    @DeleteMapping("deleteAnswers")
    public void deleteAnswers(@RequestParam String a_id) {
        answersService.deleteAnswers(a_id);
    }




}




