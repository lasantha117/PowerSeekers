package UG_WebApplication.services;

import UG_WebApplication.entity.vacancy;
import UG_WebApplication.repositories.vacancyRepository;
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
