package UG_WebApplication.question.services;
import UG_WebApplication.question.entity.question;
import UG_WebApplication.question.repositories.questionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class questionService {
    @Autowired
    questionRepository questionRepository;

    public questionService()
    {

    }
    public List<question> getQuestion()
    {
        return questionRepository.findAll();
    }
    public question SaveQuestion(question question){

        return questionRepository.save(question);
    }


}

