package UG_WebApplication.question.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "answers")
public class answers {
    @Id
    @Column(name = "a_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "answer", columnDefinition = "character varying(50) not null")
    private String answer;

    @Column(name = "q_id",insertable=false, updatable=false)
    private String q_id;

    @Column(name ="marks")
    private String marks;


    @ManyToOne
    @JoinColumn(name="q_id")
    private question question;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getQ_id() {
        return q_id;
    }

    public void setQ_id(String q_id) {
        this.q_id = q_id;
    }

    public UG_WebApplication.question.entity.question getQuestion() {
        return question;
    }

    public void setQuestion(UG_WebApplication.question.entity.question question) {
        this.question = question;
    }
}
