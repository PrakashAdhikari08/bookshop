package com.bookshop.security;

import com.bookshop.dao.UserRepository;
import com.bookshop.domain.user.User;
import com.bookshop.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserService userService;

    private UserRepository userRepository;

    public CustomUserDetailsService(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.findByEmail(email);

        if(user == null || user.getIsDisabled())
            throw new UsernameNotFoundException("User not found");

        user.setLastLoggedIn(LocalDateTime.now());

        userRepository.save(user);

        return new CustomerUserDetails(user);

    }
}
