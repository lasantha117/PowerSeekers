package UG_WebApplication.question.repositories;

import UG_WebApplication.question.entity.question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface questionRepository extends JpaRepository<question,Long> {
}
