package UG_WebApplication.repositories;

import UG_WebApplication.entity.UG;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UGRepository extends JpaRepository<UG, Long> {
    UG findByEmail(String email);
}
