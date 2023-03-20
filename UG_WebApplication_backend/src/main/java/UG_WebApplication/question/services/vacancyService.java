package UG_WebApplication.question.services;

import UG_WebApplication.question.entity.vacancy;
import UG_WebApplication.question.repositories.vacancyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class vacancyService {

    @Autowired
    vacancyRepository vacancyRepository;

    public vacancyService(){
    }

    public List<vacancy> getVacancy()
    {

        return vacancyRepository.findAll();
    }
}
