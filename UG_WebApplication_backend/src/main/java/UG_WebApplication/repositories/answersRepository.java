package UG_WebApplication.repositories;

import UG_WebApplication.entity.answers;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface answersRepository extends JpaRepository <answers,String>{



}





