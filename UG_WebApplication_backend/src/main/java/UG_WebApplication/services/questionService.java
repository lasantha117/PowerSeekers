package UG_WebApplication.services;
import UG_WebApplication.entity.question;
import UG_WebApplication.repositories.questionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class questionService {
    @Autowired
    static
    questionRepository questionRepository;


    questionService(questionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }


   public static List<question> getQuestionAdmin()
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

    public void updateQuestion(question question) {
        questionRepository.save(question);
    }










    //get  question

    private static List<question> questionList = new ArrayList<>();
    private static String lastQid = null;

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

