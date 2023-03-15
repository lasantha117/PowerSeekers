package UG_WebApplication.question.services;
import UG_WebApplication.question.entity.question;
import UG_WebApplication.question.repositories.questionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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

    public void deleteQuestion(String q_id){
        questionRepository.deleteById(q_id);
    }



    public question updateQuestion(String q_id, question question) {
        Optional<question> existingQuestion = questionRepository.findById(q_id);
        if (existingQuestion.isEmpty()) {
            throw new RuntimeException("Question not found for this id: " + q_id);
        }
    question updatedQuestion = existingQuestion.get();

    updatedQuestion.setUniversity(question.getUniversity());
    updatedQuestion.setDegree(question.getDegree());
    updatedQuestion.setThequestion(question.getThequestion());
    return questionRepository.save(updatedQuestion);
}

}

