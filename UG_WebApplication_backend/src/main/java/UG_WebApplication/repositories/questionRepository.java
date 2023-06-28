package UG_WebApplication.repositories;

import UG_WebApplication.entity.question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface questionRepository extends JpaRepository<question,String> {

   @Query(value = "SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY target_jp ORDER BY RANDOM()) AS row_num FROM questions) AS subquery WHERE row_num <= 2", nativeQuery = true)
   List<question> getRandomQuestions();



}
