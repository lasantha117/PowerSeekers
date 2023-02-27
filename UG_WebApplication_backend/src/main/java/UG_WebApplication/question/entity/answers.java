package UG_WebApplication.question.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "answers")
public class answers {
    @Id
    @Column(name = "a_id" )
    private String a_id;


    @Column(name = "question_id")
    private String question_id;

    @Column(name = "answer")
    private String answer;


    @Column(name = "job_designation")
    private String job_designation;


    @Column(name = "marks")
    private String marks;


    @ManyToOne
    @JoinColumn(name = "q_id")
    private question question;

    public String getA_id() {
        return a_id;
    }

    public void setA_id(String a_id) {
        this.a_id = a_id;
    }

    public String getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(String question_id) {
        this.question_id = question_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
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

    public UG_WebApplication.question.entity.question getQuestion() {
        return question;
    }

    public void setQuestion(UG_WebApplication.question.entity.question question) {
        this.question = question;
    }
}
