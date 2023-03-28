package UG_WebApplication.controllers;

import UG_WebApplication.entity.*;
import UG_WebApplication.repositories.UserAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import UG_WebApplication.services.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;


@CrossOrigin("http://localhost:4200/")
@RestController
class questionController{


    private class QuestionRowMapper implements RowMapper<question> {

        @Override
        public question mapRow(ResultSet rs, int rowNum) throws SQLException {
            question question = new question();
            question.setQ_id(rs.getString("q_id"));
            question.setThequestion(rs.getString("question"));
            return question;
        }
    }





    final
    questionService questionService;




    public questionController(questionService questionService) {
        this.questionService = questionService;
    }


    @GetMapping("getQuestionAdmin")
   public List<question> getQuestionAdmin() {
      return questionService.getQuestionAdmin();
  }




    private List<question> askedQuestions = new ArrayList<>();




    @PostMapping("addQuestion")
    public question SaveQuestion(@RequestBody question question)
    {


       return questionService.SaveQuestion(question);
    }


    @DeleteMapping("deleteQuestion")
   public void deleteQuestion(@RequestParam String q_id){
            questionService.deleteQuestion(q_id);
   }

    @Autowired
    private JdbcTemplate jdbcTemplate;




//-------------------edit-question---------

    @PutMapping("updateQuestion")
    public ResponseEntity<question> updateQuestionById(@PathVariable(value = "q_id") String q_id, @RequestBody question question) {
        try {
            question updatedQuestion = questionService.updateQuestion(q_id, question);
            return ResponseEntity.ok(updatedQuestion);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }



//-------------------question FOR User---------



    @GetMapping("getQuestionForUser")
    public question getQuestion() {
        return questionService.getQuestion();
    }





}

//    -----------------------------------------------------------------------


//answers--------------------------------------------------------------------------
@CrossOrigin("http://localhost:4200/")
@RestController
class answerController {

    UG_WebApplication.services.answersService answersService;

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





//-------------------answermarks controller---------
@CrossOrigin("http://localhost:4200/")
@RestController
class answersmarksController {


    UG_WebApplication.services.answersmarksService answersmarksService;

    public answersmarksController(answersmarksService answersmarksService) {
        this.answersmarksService = answersmarksService;
    }

    @PostMapping("addAnswersmarks")
    public answersmarks SaveAnswersmarks(@RequestBody answersmarks answersmarks) {
        return answersmarksService.createAnswerMark(answersmarks);
    }


    @GetMapping("getAnswersmarks")
    public List<answersmarks> getAnswersmarks() {
        return answersmarksService.giveAnswersMarks();

    }


    @DeleteMapping("deleteMarks")
    public void deleteMarks(@RequestParam String marks_id) {
        answersmarksService.deleteMarks(marks_id);
    }


//------------------------------------------------------------------------------------------------










    @RestController
    public class UserAnswerController {
        @Autowired
        UserAnswerRepository UserAnswerRepository;


//        @PostMapping("/saveAnswer")
//        public ResponseEntity<String> saveUserAnswers(@RequestBody user_answers user_answers) {
//            UserAnswerRepository.save(user_answers);
//            return ResponseEntity.ok("Answer saved successfully");
//        }


        @PostMapping("/saveAnswer")
        public ResponseEntity<?> saveAnswer(@RequestBody user_answers  user_answers ) {

            // save the answer to the database
            user_answers  saveUserAnswers =  UserAnswerRepository.save(user_answers);
            return ResponseEntity.ok(user_answers);
        }






    }











//---------------------------vacancy---------------------------------------------------------------

    @RestController
    class vacancyController {

        @Autowired
        vacancyService vacancyService;

        @GetMapping("getVacancy")
        public List<vacancy> getVacancy() {
            return vacancyService.getVacancy();

        }

        @PostMapping("addVacancy")
        public vacancy SaveVacancy(@RequestBody vacancy vacancy) {
            return vacancyService.Savevacancy(vacancy);

        }
    }

//-----------------------------Admin---------------------------------------------------------------

    @RestController
    class AdminController {
        @Autowired
        private AdminService adminService;

        @PostMapping("/AdminRegister")
        public admin registerAdmin(@RequestBody Map<String, String> request) {
            String adminName = request.get("adminName");
            String emailAddress = request.get("emailAddress");
            String password = request.get("password");
            String confirmpassword = request.get("confirmpassword");
            return adminService.registerAdmin(adminName, emailAddress, password, confirmpassword);
        }
    }
}


