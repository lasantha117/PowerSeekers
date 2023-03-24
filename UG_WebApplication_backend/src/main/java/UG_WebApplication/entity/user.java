package UG_WebApplication.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TestUsers")
public class user {

        private String userName;

        public user() {}
        @Id
        @Column(name = "user_id" ,insertable=false, updatable=false, nullable = false)
        private String user_id;

        @Column(name = "name", nullable = false)
        private String name;


        public String getUser_id() {
                return user_id;
        }

        public void setUser_id(String user_id) {
                this.user_id = user_id;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public String getUserName() {
                return userName;
        }

        public void setUserName(String userName) {
                this.userName = userName;
        }

        public user(String userName) {
                this.userName = userName;
        }











}


