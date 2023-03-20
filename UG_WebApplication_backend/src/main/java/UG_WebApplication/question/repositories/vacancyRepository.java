package UG_WebApplication.question.repositories;

import UG_WebApplication.question.entity.vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface vacancyRepository extends JpaRepository<vacancy,String> {
}
