package UG_WebApplication.services;

import UG_WebApplication.entity.admin;
import UG_WebApplication.repositories.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService  {

    private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
    private final AdminRepository adminRepository;



}



