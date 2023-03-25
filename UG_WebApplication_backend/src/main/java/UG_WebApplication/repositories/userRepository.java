package UG_WebApplication.repositories;

import UG_WebApplication.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository {

    public interface UserRepository extends JpaRepository<user, String> {

    }


}
