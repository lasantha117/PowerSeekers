package UG_WebApplication.services;
import UG_WebApplication.entity.answers;
import UG_WebApplication.entity.question;
import UG_WebApplication.repositories.questionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class questionService {
    @Autowired
    UG_WebApplication.repositories.questionRepository questionRepository;

    @Autowired
    private UG_WebApplication.repositories.answersRepository answersRepository;


    public questionService()
    {

    }
   public List<question> getQuestionAdmin()
    {
       return questionRepository.findAll();
  }


    public question SaveQuestion(question question){

        return questionRepository.save(question);
    }

    public void deleteQuestion(String q_id){
        questionRepository.deleteById(q_id);
    }




//

//    public question getRandomQuestion() {
//        return questionRepository.getRandomQuestion();
//    }


    //update question

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








    //get  question

    private List<question> questionList = new ArrayList<>();
    private String lastQid = null;

    public question getQuestion() {
        if (questionList.isEmpty()) {
            questionList = questionRepository.findAll();
        }
        Random random = new Random();
        int index = random.nextInt(questionList.size());
        while (questionList.get(index).getQ_id().equals(lastQid)) {
            index = random.nextInt(questionList.size());
        }
        lastQid = questionList.get(index).getQ_id();
        return questionList.get(index);

    }





//---------------------------- new


}

