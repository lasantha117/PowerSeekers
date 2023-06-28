package UG_WebApplication.auth;

import UG_WebApplication.entity.LoginRequest;
import UG_WebApplication.entity.Role;
import UG_WebApplication.services.AdminService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import UG_WebApplication.auth.AuthenticationService;

import java.security.Key;
import java.util.Date;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService AuthenticationService;
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final String PREFIX = "Bearer ";

    @PostMapping("/Admin-register")
    public ResponseEntity<AuthenticationResponse> AdminRegister(
            @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(AuthenticationService.AdminRegister(request));
    }



    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        AuthenticationResponse response = AuthenticationService.authenticate(request);
        response.setRole(Role.ADMIN); // Set the role as ADMIN, COMPANY, or STUDENT based on your logic
        return ResponseEntity.ok(response);

    }



    @SneakyThrows
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response) {
        AuthenticationService.refreshToken(request, response);
    }





    }


