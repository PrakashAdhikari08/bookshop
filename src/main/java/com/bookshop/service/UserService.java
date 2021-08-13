package com.bookshop.service;

import com.bookshop.domain.user.User;
import com.bookshop.dto.ChangePasswordDto;
import com.bookshop.dto.UserDto;

import java.util.List;

public interface UserService {

    Integer registerUser(User user);

    User findByEmail(String email);

    UserDto updateUser(UserDto user);

    UserDto changeStatus(Integer customerId, Boolean status);

    List<UserDto> fetchAllCustomer();

    String changePassword(ChangePasswordDto changePasswordDto);
}
