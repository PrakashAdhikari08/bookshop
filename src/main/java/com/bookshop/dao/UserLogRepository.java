package com.bookshop.dao;

import com.bookshop.domain.log.UserLog;
import com.bookshop.domain.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserLogRepository extends JpaRepository<UserLog, Integer> {

    List<UserLog> findAllByRoleOrderByLoginDateDescLoginTimeDesc(Role role);
}
