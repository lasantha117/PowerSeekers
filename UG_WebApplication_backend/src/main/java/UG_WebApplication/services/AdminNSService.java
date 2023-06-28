package UG_WebApplication.services;

import UG_WebApplication.entity.AdminNS;
import UG_WebApplication.repositories.AdminNSRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminNSService {

    @Autowired
    private AdminNSRepository adminNSRepository;

    private BCryptPasswordEncoder passwordEncoder;

    public AdminNSService() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public AdminNS register(AdminNS adminNS) {
        // Check if the email is already registered
        if (adminNSRepository.findByEmail(adminNS.getEmail()) != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        // Encrypt the password
        String encodedPassword = passwordEncoder.encode(adminNS.getPassword());
        adminNS.setPassword(encodedPassword);

        // Save the AdminNS entity
        return adminNSRepository.save(adminNS);
    }

    public AdminNS login(String email, String password) {
        AdminNS adminNS = adminNSRepository.findByEmail(email);

        // Check if the email exists
        if (adminNS == null) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        // Check if the password matches
        if (!passwordEncoder.matches(password, adminNS.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return adminNS;
    }



    public void resetPassword(String email) {
        AdminNS adminNS = adminNSRepository.findByEmail(email);

        // Check if the email exists
        if (adminNS == null) {
            throw new IllegalArgumentException("Email not found");
        }

        // Generate a new random password
        String newPassword = generateRandomPassword();

        // Encrypt the new password
        String encodedPassword = passwordEncoder.encode(newPassword);
        adminNS.setPassword(encodedPassword);

        // Save the updated AdminNS entity
        adminNSRepository.save(adminNS);


        sendPasswordResetEmail(adminNS.getEmail(), newPassword);
    }

    private String generateRandomPassword() {
        // Implement your logic to generate a random password here
        // Example: You can use a library or generate a random alphanumeric string
        return "newPassword123";
    }

    private void sendPasswordResetEmail(String email, String newPassword) {

        // Example: You can use a library or call an email service API
        System.out.println("Sending password reset email to: " + email);
        System.out.println("New password: " + newPassword);
    }



    public AdminNS findByEmail(String email) {
        return adminNSRepository.findByEmail(email);
    }
}
