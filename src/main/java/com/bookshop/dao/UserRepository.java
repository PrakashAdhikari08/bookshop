package com.bookshop.dao;

import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

    List<User> findAllByRole(Role role);
}
