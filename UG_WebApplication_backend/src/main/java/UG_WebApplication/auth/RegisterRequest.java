package UG_WebApplication.auth;


import UG_WebApplication.entity.Role;
import lombok.*;

@Getter
@EqualsAndHashCode
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
}

