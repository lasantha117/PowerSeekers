package UG_WebApplication.question.services;
import UG_WebApplication.question.entity.answers;
import UG_WebApplication.question.repositories.answersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class answersService {
    @Autowired
         answersRepository answersRepository;

    public answersService()
    {

    }
    public List<answers> getAnswers()
    {
        return answersRepository.findAll();
    }
    public answers SaveAnswers(answers answers){

        return answersRepository.save(answers);
    }


}

