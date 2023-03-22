package UG_WebApplication.services;

import UG_WebApplication.entity.admin;
import UG_WebApplication.entity.question;
import UG_WebApplication.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public admin registerAdmin(String adminName, String emailAddress , String password,String confirmpassword) {
        if (adminRepository.findByEmailAddress(emailAddress) != null) {
            throw new RuntimeException("Admin with email address " + emailAddress + " already exists");
        }
        admin admin = new admin();
        admin.setAdminName(adminName);
        admin.setEmailAddress(emailAddress);
        admin.setPassword(password);
        admin.setConfirmPassword(confirmpassword);
        return adminRepository.save(admin);
    }





    public admin registerAdmin(admin admin){

        return adminRepository.save(admin);
    }

}
