package com.bookshop.service;

import com.bookshop.domain.user.User;

public interface UserService {

    Integer registerUser(User user);

    User findByEmail(String email);

    void updateUser(User user, Integer userId);

    String changeStatus(Integer customerId, Boolean status);
}
