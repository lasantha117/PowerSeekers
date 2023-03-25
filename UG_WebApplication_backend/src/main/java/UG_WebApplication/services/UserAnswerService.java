package UG_WebApplication.services;

import UG_WebApplication.entity.user_answers;
import org.springframework.beans.factory.annotation.Autowired;
import UG_WebApplication.repositories.*;
public class UserAnswerService {



    @Autowired
    UserAnswerRepository  UserAnswerRepository;




    public void Save_userAnswers(user_answers user_answers) {
        UserAnswerRepository.save(user_answers);
    }



}
