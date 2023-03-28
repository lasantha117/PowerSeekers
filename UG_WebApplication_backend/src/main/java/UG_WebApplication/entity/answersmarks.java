package UG_WebApplication.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "answersmarks")
public class answersmarks {


        @Id
        @Column(name = "marks_id")
        private String marks_id;



        @ManyToOne
        @JoinColumn(name = "user_id")
        private user user;

        @Column(name = "a_id" )
        private String a_id;



        @ManyToOne
        @JoinColumn(name = "a_id"  ,insertable=false, updatable=false)
        private answers answers;

        @Column(name = "job_title")
        private String job_title;

        @Column(name = "marks")
        private Integer marks;

        public String getMarks_id() {
                return marks_id;
        }

        public void setMarks_id(String marks_id) {
                this.marks_id = marks_id;
        }



        public UG_WebApplication.entity.answers getAnswers() {
                return answers;
        }

        public void setAnswers(UG_WebApplication.entity.answers answers) {
                this.answers = answers;
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


        public String getA_id() {
                return a_id;
        }

        public void setA_id(String a_id) {
                this.a_id = a_id;
        }

        public UG_WebApplication.entity.user getUser() {
                return user;
        }

        public void setUser(UG_WebApplication.entity.user user) {
                this.user = user;
        }
}


