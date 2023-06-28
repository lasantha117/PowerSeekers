package UG_WebApplication.repositories;

import UG_WebApplication.entity.answersmarks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface answersmarksRepository extends JpaRepository<answersmarks, Long> {


    @Query("SELECT a FROM answersmarks a WHERE a.a_id = :a_id AND a.job_title = :job_title")
    answersmarks findByAIdAndJobTitle(String a_id, String job_title);



}
