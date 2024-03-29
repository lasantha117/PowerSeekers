package UG_WebApplication.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;


@Entity
@Table(name = "questions")
public class question {





    @Id
    @Column(name = "q_id" ,insertable=false, updatable=false, nullable = false)
    private String q_id;



    @Column(name = "thequestion" , nullable = false)
    private String thequestion;

    @Column(name = "university" , nullable = false)
    private String university;

    @Column(name = "degree", nullable = false)
    private String degree;


    @Column(name = "target_jp")
    private String target_jp;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "q_id")
    private Set<answers> answers;






    public List<UG_WebApplication.entity.answers> getAnswers() {
        return (List<UG_WebApplication.entity.answers>) answers;
    }


    public void setAnswers(Set<UG_WebApplication.entity.answers> answers) {
        this.answers = answers;
    }





    public String getQ_id() {
        return q_id;
    }

    public void setQ_id(String q_id) {
        this.q_id = q_id;
    }

    public String getThequestion() {
        return thequestion;
    }

    public void setThequestion(String thequestion) {
        this.thequestion = thequestion;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }


    public String getTarget_jp() {
        return target_jp;
    }

    public void setTarget_jp(String target_jp) {
        this.target_jp = target_jp;
    }
}
