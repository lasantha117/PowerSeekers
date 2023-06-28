package UG_WebApplication.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "final_result")
public class final_result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "total_marks")
    private int totalMarks;


    @Column(name ="email" )
    private String email;

    public final_result() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }

    public final_result(Long id, String jobTitle, int totalMarks) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.totalMarks = totalMarks;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}
