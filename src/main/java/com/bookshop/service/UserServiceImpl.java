package com.bookshop.service;

import com.bookshop.dao.UserRepository;
import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.exception.EmailAlreadyRegisteredException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Integer registerUser(User user) {
        user.setRole(Role.CUSTOMER);
        user.setResetToken(generateResetToken());
        user.setIsDisabled(false);
        log.info("Saving user to DB with role {}", user.getRole());
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new EmailAlreadyRegisteredException("Email already in use");
        }
        User registeredUser = userRepository.save(user);
        log.info("User saved to DB");
        return registeredUser.getId();
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public void updateUser(User user, Integer userId) {
        log.info("Updating profile for user with id -> {}", userId);
        User user1 = userRepository.findById(userId).get();
        if (user.getFirstName() != null)
            user1.setFirstName(user.getFirstName());
        if (user.getLastName() != null)
            user1.setLastName(user.getLastName());
        if (user.getAddress() != null)
            user1.setAddress(user.getAddress());
        if (user.getBirthDate() != null)
            user1.setBirthDate(user.getBirthDate());
        if (user.getGender() != null)
            user1.setGender(user.getGender());
        user1.setLastUpdated(LocalDateTime.now());
    }

    @Override
    @Transactional
    public String changeStatus(Integer customerId, Boolean status) {
        userRepository.findById(customerId).get().setIsDisabled(status);
        return status ? "DISABLED" : "ACTIVATED";
    }

    private Integer generateResetToken() {
        Random random = new Random();
        int number = random.nextInt(999999);

        return Integer.valueOf(String.format("%06d", number));
    }
}
