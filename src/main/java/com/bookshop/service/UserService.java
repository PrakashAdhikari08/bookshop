package com.bookshop.service;

import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;

public interface UserService {

    Integer registerUser(User user);

    User findByEmail(String email);

    UserDto updateUser(UserDto user);

    String changeStatus(Integer customerId, Boolean status);
}
