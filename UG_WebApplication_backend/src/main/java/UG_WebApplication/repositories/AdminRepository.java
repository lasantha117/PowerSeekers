package UG_WebApplication.repositories;

import UG_WebApplication.entity.admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<admin, String> {
    admin findByEmailAddress(String emailAddress);


}
