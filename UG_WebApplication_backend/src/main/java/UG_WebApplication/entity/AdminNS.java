package UG_WebApplication.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "AdminNS")
public class AdminNS {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long a_id;

    private String name;
    private String email;
    private String password;

    public AdminNS() {
        // Default constructor
    }

    public Long getA_id() {
        return a_id;
    }

    public void setA_id(Long a_id) {
        this.a_id = a_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AdminNS(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public AdminNS(Long a_id, String name, String email, String password) {
        this.a_id = a_id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
