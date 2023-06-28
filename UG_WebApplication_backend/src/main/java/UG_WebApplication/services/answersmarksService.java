package UG_WebApplication.services;
import UG_WebApplication.entity.answersmarks;
import UG_WebApplication.repositories.answersmarksRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class answersmarksService {

    @Autowired
    private answersmarksRepository answersmarksRepository;



    public List<answersmarks> giveAnswersMarks() {
        return answersmarksRepository.findAll();
    }

    public answersmarks createAnswerMark(answersmarks answersmarks) {
        return answersmarksRepository.save(answersmarks);
    }


    public void deleteMarks(int marks_id) {
        answersmarksRepository.deleteById((long) marks_id);
    }
}
