package UG_WebApplication.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_answers")
public class user_answers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "q_id")
    private String q_id;

    @Column(name = "a_id")
    private String a_id;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQ_id() {
        return q_id;
    }

    public void setQ_id(String q_id) {
        this.q_id = q_id;
    }

    public String getA_id() {
        return a_id;
    }

    public void setA_id(String a_id) {
        this.a_id = a_id;
    }
}
