package UG_WebApplication.repositories;

import UG_WebApplication.entity.UG;
import UG_WebApplication.entity.admin;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
@Repository
public interface AdminRepository extends JpaRepository<admin, Integer> {

    Optional<admin> findByEmail(String email);
}


