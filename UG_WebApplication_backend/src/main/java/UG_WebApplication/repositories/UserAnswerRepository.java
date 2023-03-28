package UG_WebApplication.repositories;

import UG_WebApplication.entity.user_answers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAnswerRepository extends JpaRepository<user_answers, String> {

}
