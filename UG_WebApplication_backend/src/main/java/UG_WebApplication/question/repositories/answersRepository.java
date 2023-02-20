package UG_WebApplication.question.repositories;

import UG_WebApplication.question.entity.answers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface answersRepository extends JpaRepository <answers,Long>{
}


