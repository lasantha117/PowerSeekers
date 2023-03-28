package UG_WebApplication.repositories;

import UG_WebApplication.entity.question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface questionRepository extends JpaRepository<question,String> {

   @Query(value = "SELECT * FROM questions ORDER BY RAND() LIMIT 1", nativeQuery = true)
   question getRandomQuestion();



}
