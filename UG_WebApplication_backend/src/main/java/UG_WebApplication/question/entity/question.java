package UG_WebApplication.question.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class question {

    @Id
    @Column(name = "q_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String q_id;

    @Column(name = "q_type", columnDefinition = "character varying(15) not null")
    private String q_type;



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


}
