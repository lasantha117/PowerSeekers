package UG_WebApplication.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_answers")
public class user_answers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long UA_id;

    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "a_id" ,insertable=false, updatable=false )
    private answers answers;
    @Column(name = "a_id")
    private Long a_id;


    public Long getId() {
        return UA_id;
    }

    public void setId(Long UA_id) {
        this.UA_id = UA_id;
    }


    public Long getUA_id() {
        return UA_id;
    }

    public void setUA_id(Long UA_id) {
        this.UA_id = UA_id;
    }

    public Long getA_id() {
        return a_id;
    }

    public void setA_id(Long a_id) {
        this.a_id = a_id;
    }

    public UG_WebApplication.entity.answers getAnswers() {
        return answers;
    }

    public void setAnswers(UG_WebApplication.entity.answers answers) {
        this.answers = answers;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
