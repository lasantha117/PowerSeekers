package UG_WebApplication.services;
import UG_WebApplication.entity.answers;

import UG_WebApplication.repositories.answersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class answersService {
    @Autowired
         answersRepository answersRepository;




    public List<answers> getAnswers()
    {
        return answersRepository.findAll();
    }

    public answers SaveAnswers( answers answers){

        return answersRepository.save(answers);
    }


    public void deleteAnswers(String a_id) {
        answersRepository.deleteById(a_id);
    }

}

