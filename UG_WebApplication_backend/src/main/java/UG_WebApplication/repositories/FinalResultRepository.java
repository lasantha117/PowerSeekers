package UG_WebApplication.repositories;

import UG_WebApplication.entity.final_result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FinalResultRepository extends JpaRepository<final_result, Long> {
    // Custom query to calculate the summation of marks for each job_title
    @Query(value = "SELECT am.job_title, SUM(am.marks) AS total_marks " +
            "FROM user_answers ua " +
            "JOIN answersmarks am ON ua.a_id = am.a_id " +
            "JOIN ug u ON ua.email = u.email " +
            "WHERE u.email = :email " +
            "GROUP BY am.job_title " +
            "ORDER BY total_marks DESC", nativeQuery = true)
    List<Object[]> calculateTotalMarksByJobTitle(String email);

    @Query(value = "(SELECT job_title, total_marks FROM (" +
            "    (SELECT job_title, total_marks FROM final_result WHERE email = :email ORDER BY total_marks DESC LIMIT 3)" +
            "    UNION ALL" +
            "    (SELECT job_title, total_marks FROM final_result WHERE email = :email " +
            "      AND job_title NOT IN (SELECT job_title FROM final_result WHERE email = :email ORDER BY total_marks DESC LIMIT 3) " +
            "      ORDER BY total_marks DESC LIMIT 1 OFFSET 0)" +
            "    UNION ALL" +
            "    (SELECT job_title, total_marks FROM final_result WHERE email = :email " +
            "      AND job_title NOT IN (SELECT job_title FROM final_result WHERE email = :email ORDER BY total_marks DESC LIMIT 3) " +
            "      AND job_title NOT IN (SELECT job_title FROM final_result WHERE email = :email " +
            "        AND job_title NOT IN (SELECT job_title FROM final_result WHERE email = :email ORDER BY total_marks DESC LIMIT 3) " +
            "        ORDER BY total_marks DESC LIMIT 1 OFFSET 0) " +
            "      ORDER BY total_marks DESC LIMIT 1 OFFSET 0)" +
            ") AS subquery) LIMIT 3", nativeQuery = true)
    List<Object[]> findTopThreeJobTitlesByTotalMarks(String email);


}
