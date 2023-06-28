package UG_WebApplication.repositories;

import UG_WebApplication.entity.login_records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginRecordRepository extends JpaRepository<login_records, Long> {
    List<login_records> findByEmailOrderByLoginTimeDesc(String email);
}
