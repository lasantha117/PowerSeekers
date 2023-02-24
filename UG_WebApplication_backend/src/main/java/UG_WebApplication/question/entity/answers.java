package UG_WebApplication.question.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "answers")
public class answers {
    @Id
    @Column(name = "a_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "answer", columnDefinition = "character varying(100) not null")
    private String answer;

    @Column(name = "q_id",insertable=false, updatable=false)
    private String q_id;

    @Column(name = "job_designation", columnDefinition = "character varying(20) not null")
    private String job_designation;


    @Column(name = "marks", columnDefinition = "character varying(5) not null")
    private String marks;

    @Column(name = "total", columnDefinition = "character varying(5) not null")
    private String total;




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

    public String getJob_designation() {
        return job_designation;
    }

    public void setJob_designation(String job_designation) {
        this.job_designation = job_designation;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public UG_WebApplication.question.entity.question getQuestion() {
        return question;
    }

    public void setQuestion(UG_WebApplication.question.entity.question question) {
        this.question = question;
    }



}
