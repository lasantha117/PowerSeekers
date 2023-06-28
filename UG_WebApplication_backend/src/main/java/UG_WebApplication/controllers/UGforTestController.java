package UG_WebApplication.controllers;

import UG_WebApplication.entity.*;
//import UG_WebApplication.repositories.FinalResultRepository;
import UG_WebApplication.repositories.FinalResultRepository;

import UG_WebApplication.repositories.UserAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import UG_WebApplication.services.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.RowMapper;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

//@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/auth")
class questionController {


    private class QuestionRowMapper implements RowMapper<question> {

        @Override
        public question mapRow(ResultSet rs, int rowNum) throws SQLException {
            question question = new question();
            question.setQ_id(rs.getString("q_id"));
            question.setThequestion(rs.getString("question"));
            return question;
        }
    }




            @PostMapping("addQuestion")
            public question SaveQuestion(@RequestBody question question) {


                return questionService.SaveQuestion(question);
            }
        @Autowired
        private questionService questionService;

        @DeleteMapping("deleteQuestion")
        public void deleteQuestion(@RequestParam String q_id){
           questionService.deleteQuestion(q_id);
   }

            @Autowired
            private JdbcTemplate jdbcTemplate;


            //-------------------edit-question---------

            @PutMapping("/UpdateQuestions/{q_id}")
            public ResponseEntity<Void> updateQuestion(@PathVariable("q_id") String q_id, @RequestBody question question) {
                question.setQ_id(q_id);
                questionService.updateQuestion(question);
                return ResponseEntity.ok().build();
            }


         @GetMapping("getQuestionAdmin")
            public List<question> getQuestionAdmin() {

            return questionService.getQuestionAdmin();
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
        @RequestMapping("/api/v1/auth")
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
            public void deleteAnswers(@RequestParam Long a_id) {
                answersService.deleteAnswers(a_id);
            }



            @PutMapping("/UpdateAnswers/{a_id}")
            public ResponseEntity<Void> updateAnswer(@PathVariable("a_id") Long a_id, @RequestBody answers answers) {
                answers.setA_id(a_id);
               answersService.updateAnswer(answers);
                return ResponseEntity.ok().build();
            }




        }


        //-------------------answermarks controller---------
        @CrossOrigin("http://localhost:4200/")
        @RestController
        @RequestMapping("/api/v1/auth")
        class answersmarksController {


            @Autowired
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
            public void deleteMarks(@RequestParam Integer marks_id) {
                answersmarksService.deleteMarks(marks_id);
            }


//------------------------------------------------------------------------------------------------


            @RestController
            @RequestMapping("/api/v1/auth")
            public class UserAnswerController {

                private final UserAnswerService userAnswerService;
                private final UserAnswerRepository userAnswerRepository;

                @Autowired
                public UserAnswerController(UserAnswerService userAnswerService, UserAnswerRepository userAnswerRepository) {
                    this.userAnswerService = userAnswerService;
                    this.userAnswerRepository = userAnswerRepository;
                }


                    @PostMapping("/saveAnswer")
                    public ResponseEntity<?> saveAnswer(@RequestBody user_answers user_answers) {
                        // Get the email from the request body
                        String email = user_answers.getEmail();

                        // Set the email in the UserAnswer entity
                        user_answers userAnswers = new user_answers();
                        user_answers.setEmail(email);
                        // Set other properties of the UserAnswer entity as needed
                        // ...

                        // Save the answer to the database
                        user_answers savedUserAnswer = userAnswerRepository.save(user_answers);

                        return ResponseEntity.ok(savedUserAnswer);
                    }

                    // Other controller methods...

                }



            @RestController
            @RequestMapping("/api/v1/auth")
            public class CalculationController {
                private final FinalResultService finalResultService;

                public CalculationController(FinalResultService finalResultService) {
                    this.finalResultService = finalResultService;
                }

                @PostMapping("/total-marks")
                public ResponseEntity<String> calculateTotalMarks(@RequestParam("email") String email) {
                    try {
                        finalResultService.calculateAndSaveTotalMarks(email);
                        return ResponseEntity.ok("Total marks calculated and saved successfully.");
                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("An error occurred during the calculation and saving of total marks.");
                    }
                }





            @RestController
            @RequestMapping("/api/v1/auth")
            public class JobTitleController {
                private final FinalResultRepository finalResultRepository;

                public JobTitleController(FinalResultRepository finalResultRepository) {
                    this.finalResultRepository = finalResultRepository;
                }

                @GetMapping("/top-three")
                public ResponseEntity<List<String>> getTopThreeJobTitles(@RequestParam("email") String email) {
                    try {
                        List<Object[]> result = finalResultRepository.findTopThreeJobTitlesByTotalMarks(email);

                        List<String> jobTitles = new ArrayList<>();
                        for (Object[] row : result) {
                            String jobTitle = (String) row[0];
                            jobTitles.add(jobTitle);
                        }

                        return ResponseEntity.ok(jobTitles);
                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
                    }
                }
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


//-----------------------------UGtest---------------------------------------------------------------


        }
@RestController
@RequestMapping("/api/v1/auth")
class UG {
    @Autowired
    private UGService ugService;
    private UG UG;


    @PostMapping("/UGregister")
    public UG_WebApplication.entity.UG register(@RequestBody UG_WebApplication.entity.UG UG) {
        return ugService.register(UG);
    }


    @PostMapping("/UGlogin")
    public UG_WebApplication.entity.UG login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        UG_WebApplication.entity.UG user = ugService.login(email, password);

        // Set the userId in the response object
        user.setUserId(user.getUser_id());

        return user;
    }


}



//----------------------------AdminNS---------------------------------------------------------------

    @RestController
    @RequestMapping("/api/v1/auth")
    class AdminNSController {
        @Autowired
        private AdminNSService AdminNSService;


        @PostMapping("/AdminNSRegister")
        public UG_WebApplication.entity.AdminNS register(@RequestBody UG_WebApplication.entity.AdminNS AdminNS) {
            return AdminNSService.register(AdminNS);
        }

        @PostMapping("/AdminNSlogin")
        public UG_WebApplication.entity.AdminNS login(@RequestBody LoginRequest loginRequest) {
            String email = loginRequest.getEmail();
            String password = loginRequest.getPassword();
            return AdminNSService.login(email, password);
        }

        @PostMapping("/forgotPassword")
        public ResponseEntity<String> forgotPassword(@RequestParam("email") String email) {
            try {
                AdminNSService.resetPassword(email);
                return ResponseEntity.ok("Password reset successful");
            } catch (IllegalArgumentException e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
        }


        private final AdminNSService adminNSService;

        @Autowired
        public AdminNSController(AdminNSService adminNSService) {
            this.adminNSService = adminNSService;
        }

        @GetMapping("/details")
        @ResponseBody
        public AdminNS getAdminDetails(String email) {
            return adminNSService.findByEmail(email);
        }
    }








