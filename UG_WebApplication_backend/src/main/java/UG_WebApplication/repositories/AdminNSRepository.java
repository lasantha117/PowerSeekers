package UG_WebApplication.repositories;


import UG_WebApplication.entity.AdminNS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminNSRepository  extends JpaRepository<AdminNS, Long> {

    AdminNS findByEmail(String email);

}
