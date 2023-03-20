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





    @Query(nativeQuery = true, value ="WITH selected_question AS (\n" +
            "  SELECT q_id\n" +
            "  FROM questions\n" +
            "  OFFSET floor(random() * (SELECT COUNT(*) FROM questions))\n" +
            "  LIMIT 1\n" +
            ")\n" +
            "SELECT q.thequestion, a.answer, am.marks, am.job_title\n" +
            "FROM questions q\n" +
            "JOIN answers a ON q.q_id = a.q_id\n" +
            "JOIN answersmarks am ON a.a_id = am.a_id AND am.marks = (\n" +
            "  SELECT MAX(am2.marks)\n" +
            "  FROM answersmarks am2\n" +
            "  WHERE am2.a_id = a.a_id\n" +
            ")\n" +
            "WHERE q.q_id = (SELECT q_id FROM selected_question);\n"

   )
   List<Object[]> getRandomQuestionforUser();





}


