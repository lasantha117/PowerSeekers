package UG_WebApplication.repositories;

import UG_WebApplication.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

public class userRepository {

    public interface UserRepository extends JpaRepository<user, String> {

    }


}
