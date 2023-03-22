
package UG_WebApplication.repositories;

import UG_WebApplication.entity.vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface vacancyRepository extends JpaRepository<vacancy,String> {

}
