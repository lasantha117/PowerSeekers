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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String q_id;

    @Column(name = "q_type", columnDefinition = "character varying(15) not null")
    private String q_type;



    @Column(name = "uni_ID", columnDefinition = "character varying(15) not null")
    private String uni_ID;


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

    public String getUni_ID() {
        return uni_ID;
    }

    public void setUni_ID(String uni_ID) {
        this.uni_ID = uni_ID;
    }
}
