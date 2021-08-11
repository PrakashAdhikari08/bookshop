package com.bookshop.service;

import com.bookshop.dao.UserRepository;
import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;
import com.bookshop.exception.EmailAlreadyRegisteredException;
import com.bookshop.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
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
    public UserDto updateUser(UserDto userDto) {
        log.info("Updating profile for user with id -> {}", userDto.getId());
        Optional<User> userOptional = userRepository.findById(userDto.getId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (userDto.getFirstName() != null)
                user.setFirstName(userDto.getFirstName());
            if (userDto.getLastName() != null)
                user.setLastName(userDto.getLastName());
            if (userDto.getAddress() != null)
                user.setAddress(userDto.getAddress());
            if (userDto.getBirthDate() != null)
                user.setBirthDate(userDto.getBirthDate());
            if (userDto.getGender() != null)
                user.setGender(userDto.getGender());
            return UserMapper.toDto(userRepository.save(user));
        } else {
            return null;
        }
    }

    @Override
    @Transactional
    public UserDto changeStatus(Integer customerId, Boolean status) {
        User user = userRepository.findById(customerId).get();
        user.setIsDisabled(!status);
        return UserMapper.toDto(user);
    }

    @Override
    public List<UserDto> fetchAllCustomer() {
        List<User> userList = userRepository.findAllByRole(Role.CUSTOMER);
        return UserMapper.toDtoList(userList);
    }

    private Integer generateResetToken() {
        Random random = new Random();
        int number = random.nextInt(999999);
        return Integer.valueOf(String.format("%06d", number));
    }
}
