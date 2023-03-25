package UG_WebApplication.services;

import UG_WebApplication.entity.user_answers;
import org.springframework.beans.factory.annotation.Autowired;

public class UserAnswerService {



    @Autowired
    UG_WebApplication.repositories.UserAnswerRepository UserAnswerRepository;




    public user_answers Save_userAnswers(user_answers user_answers) {
        return UserAnswerRepository.save(user_answers);
    }
}
