package UG_WebApplication.entity;
import jakarta.persistence.*;



@Entity
@Table(name = "vacancies")
public class vacancy {

    @Id
    @Column(name = "vacancy_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String v_id;

    @Column(name = "vacancy_name")
    private String v_name;

    @Column(name = "job_designation")
    private String job;

    @Column(name = "experiences")
    private String exp;

    @Column(name = "age")
    private String age;

    @Column(name = "description")
    private String desc;


    public String getV_id() {
        return v_id;
    }

    public void setV_id(String v_id) {
        this.v_id = v_id;
    }

    public String getV_name() {
        return v_name;
    }

    public void setV_name(String v_name) {
        this.v_name = v_name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
