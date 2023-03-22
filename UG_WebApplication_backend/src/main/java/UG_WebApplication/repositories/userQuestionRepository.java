package UG_WebApplication.repositories;
import UG_WebApplication.entity.answersmarks;
import UG_WebApplication.entity.question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;



import UG_WebApplication.entity.answersmarks;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userQuestionRepository extends JpaRepository<question, String>  {
//    @Query(nativeQuery = true, value ="SELECT DISTINCT q.thequestion\n" +
//            "FROM questions q\n" +
//            "JOIN answers a ON q.q_id = a.q_id\n" +
//            "WHERE q.q_id = (\n" +
//            "  SELECT q_id\n" +
//            "  FROM questions\n" +
//            "  ORDER BY RANDOM()\n" +
//            "  LIMIT 1\n" +
//            ");\n"
//
//    )
//    List<Object[]> getRandomQuestionforUser();





    @Query(nativeQuery = true, value ="SELECT q_id, thequestion\n" +
            "FROM questions\n" +
            "WHERE q_id NOT IN (\n" +
            "  SELECT q_id\n" +
            "  FROM questions\n" +
            "  ORDER BY random()\n" +
            "  LIMIT 1\n" +
            ")\n" +
            "ORDER BY random()\n" +
            "LIMIT 1;\n"

   )
   List<Object[]> getRandomQuestionforUser();





}


