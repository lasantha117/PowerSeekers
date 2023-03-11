package UG_WebApplication.question.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Set;


@Entity
@Table(name = "questions")
public class question {

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "q_id")
    private Set<answers> answers;


    @Id
    @Column(name = "q_id" ,insertable=false, updatable=false)
    private String q_id;

    @Column(name = "q_type")
    private String q_type;

    @Column(name = "thequestion")
    private String thequestion;

    @Column(name = "university")
    private String university;

    @Column(name = "degree")
    private String degree;

    public Set<UG_WebApplication.question.entity.answers> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<UG_WebApplication.question.entity.answers> answers) {
        this.answers = answers;
    }

    public String getQ_id() {
        return q_id;
    }

    public void setQ_id(String q_id) {
        this.q_id = q_id;
    }

    public String getQ_type() {
        return q_type;
    }

    public void setQ_type(String q_type) {
        this.q_type = q_type;
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
}
