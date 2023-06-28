package UG_WebApplication.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;


@Entity
@Table(name = "answers")
public class answers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id",insertable=false, updatable=false)
    private Long a_id;


    @Column(name = "q_id")
    private String q_id;


    @Column(name = "answer")
    private String answer;


    @ManyToOne
    @JoinColumn(name = "q_id" ,insertable=false, updatable=false )
    private question question;

    @JsonIgnore
    @OneToMany(mappedBy = "a_id")
    private List<answersmarks> answerMarks;


    public Long getA_id() {
        return a_id;
    }

    public void setA_id(Long a_id) {
        this.a_id = a_id;
    }

    public String getQ_id() {
        return q_id;
    }

    public void setQ_id(String q_id) {
        this.q_id = q_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public UG_WebApplication.entity.question getQuestion() {
        return question;
    }

    public void setQuestion(UG_WebApplication.entity.question question) {
        this.question = question;
    }


    public List<answersmarks> getAnswerMarks() {
        return answerMarks;
    }

    public void setAnswerMarks(List<answersmarks> answerMarks) {
        this.answerMarks = answerMarks;
    }



}


