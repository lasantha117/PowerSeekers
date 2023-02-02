package UG_WebApplication.question.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class question {

    @Id
    @Column(name = "q_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="q_type", columnDefinition = "character varying(15) not null")
    private String q_type;

    @Column(name="uni_ID",columnDefinition = "character varying(15) not null" )
    private String uni_ID;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
