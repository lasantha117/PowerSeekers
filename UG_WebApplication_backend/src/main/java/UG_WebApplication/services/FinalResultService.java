package UG_WebApplication.services;

import UG_WebApplication.entity.final_result;
import UG_WebApplication.repositories.FinalResultRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FinalResultService {
//    private final FinalResultRepository finalResultRepository;
//
//    public FinalResultService(FinalResultRepository finalResultRepository) {
//        this.finalResultRepository = finalResultRepository;
//    }
//
//    public void calculateAndSaveTotalMarks(String email) {
//        List<Object[]> result = finalResultRepository.calculateTotalMarksByJobTitle();
//
//        List<final_result> finalResults = new ArrayList<>();
//        for (Object[] row : result) {
//            String jobTitle = (String) row[0];
//            int totalMarks = ((Number) row[1]).intValue();
//
//            final_result final_result = new final_result();
//            final_result.setJobTitle(jobTitle);
//            final_result.setTotalMarks(totalMarks);
//            finalResults.add(final_result);
//        }
//
//        finalResultRepository.saveAll(finalResults);
//    }



    private final FinalResultRepository finalResultRepository;

    public FinalResultService(FinalResultRepository finalResultRepository) {
        this.finalResultRepository = finalResultRepository;
    }

    public void calculateAndSaveTotalMarks(String email) {
        List<Object[]> result = finalResultRepository.calculateTotalMarksByJobTitle(email);

        List<final_result> finalResults = new ArrayList<>();
        for (Object[] row : result) {
            String jobTitle = (String) row[0];
            int totalMarks = ((Number) row[1]).intValue();

            final_result finalResult = new final_result();
            finalResult.setEmail(email);
            finalResult.setJobTitle(jobTitle);
            finalResult.setTotalMarks(totalMarks);
            finalResults.add(finalResult);
        }

        finalResultRepository.saveAll(finalResults);
    }
}
