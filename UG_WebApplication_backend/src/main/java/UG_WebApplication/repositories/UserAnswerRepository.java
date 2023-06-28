package UG_WebApplication.repositories;

import UG_WebApplication.entity.user_answers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAnswerRepository extends JpaRepository<user_answers, Long> {

   user_answers save(user_answers user_answers);

}


