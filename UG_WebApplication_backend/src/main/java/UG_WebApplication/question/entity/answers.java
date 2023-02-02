package UG_WebApplication.question.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "AnswerTable")
public class answers {
    @Id
    @Column(name = "q_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



}
