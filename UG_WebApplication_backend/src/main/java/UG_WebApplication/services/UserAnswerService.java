package UG_WebApplication.services;

import UG_WebApplication.entity.answers;
import UG_WebApplication.entity.user_answers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import UG_WebApplication.repositories.UserAnswerRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserAnswerService {
    @Autowired
    UserAnswerRepository userAnswerRepository;

    @Autowired
    UserAnswerRepository  UserAnswerRepository;

    public void Save_userAnswers(user_answers user_answers) {
        UserAnswerRepository.save(user_answers);
    }

    @Autowired
    public UserAnswerService(UserAnswerRepository userAnswerRepository) {
        this.userAnswerRepository = userAnswerRepository;
    }

}
