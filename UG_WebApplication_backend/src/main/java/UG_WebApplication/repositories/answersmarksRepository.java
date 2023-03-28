package UG_WebApplication.repositories;

import UG_WebApplication.entity.answersmarks;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface answersmarksRepository extends JpaRepository<answersmarks,String> {



}

