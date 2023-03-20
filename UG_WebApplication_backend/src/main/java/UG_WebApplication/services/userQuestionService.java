package UG_WebApplication.services;

import UG_WebApplication.entity.question;
import UG_WebApplication.repositories.userQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class userQuestionService {



    @Autowired
    private userQuestionRepository repository;

    public List<Object[]> getRandomQuestionforUser() {
        return repository.getRandomQuestionforUser();
    }


}
