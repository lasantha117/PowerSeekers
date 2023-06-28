package UG_WebApplication.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "answersmarks")
public class answersmarks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marks_id", insertable = false, updatable = false)
    private Integer marks_id;

    @Column(name = "a_id")
    private Long a_id;

    @Column(name = "job_title")
    private String job_title;

    @Column(name = "marks")
    private Integer marks;


    public Integer getMarks_id() {
        return marks_id;
    }

    public void setMarks_id(Integer marks_id) {
        this.marks_id = marks_id;
    }

    public Long getA_id() {
        return a_id;
    }

    public void setA_id(Long a_id) {
        this.a_id = a_id;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public Integer getMarks() {
        return marks;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }


    @PrePersist
    private void generateId() {
        if (marks_id == null || marks_id > 881) {
            marks_id = 881; // Set the minimum ID value to 881
        }
    }


}


