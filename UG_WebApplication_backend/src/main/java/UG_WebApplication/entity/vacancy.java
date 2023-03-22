package UG_WebApplication.entity;
import jakarta.persistence.*;



@Entity
@Table(name = "vacancies")
public class vacancy{

        @Id
        @Column(name = "vacancy_id" )
        private String vacancy_id;

        @Column(name = "vacancy_name")
        private String vacancy_name;



        @Column(name = "experiences")
        private String experiences;


         @Column(name = "age")
         private String age;

        @Column(name = "description")
         private String description;


    public String getVacancy_id() {
        return vacancy_id;
    }

    public void setVacancy_id(String vacancy_id) {
        this.vacancy_id = vacancy_id;
    }

    public String getVacancy_name() {
        return vacancy_name;
    }

    public void setVacancy_name(String vacancy_name) {
        this.vacancy_name = vacancy_name;
    }

    public String getExperiences() {
        return experiences;
    }

    public void setExperiences(String experiences) {
        this.experiences = experiences;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
