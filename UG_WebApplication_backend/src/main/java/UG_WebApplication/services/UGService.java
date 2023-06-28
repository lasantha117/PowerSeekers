package UG_WebApplication.services;

import UG_WebApplication.entity.UG;
import UG_WebApplication.repositories.UGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UGService {
    @Autowired
    private UGRepository ugRepository;

    public UG register(UG ug) {
        // Check if the email is already registered
        if (ugRepository.findByEmail(ug.getEmail()) != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        // Save the UG entity
        return ugRepository.save(ug);
    }

    public UG login(String email, String password) {
        UG ug = ugRepository.findByEmail(email);

        // Check if the email exists
        if (ug == null) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        // Check if the password matches
        if (!ug.getPassword().equals(password)) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return ug;
    }
}
