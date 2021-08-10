package com.bookshop.service;

import com.bookshop.dao.UserLogRepository;
import com.bookshop.domain.log.UserLog;
import com.bookshop.domain.user.Role;
import com.bookshop.dto.UserLogDto;
import com.bookshop.mapper.UserLogMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserLogServiceImpl implements UserLogService {

    private UserLogRepository userLogRepository;

    public UserLogServiceImpl(UserLogRepository userLogRepository) {
        this.userLogRepository = userLogRepository;
    }

    @Override
    public void addLog(UserLog userLog) {
        userLogRepository.save(userLog);
        log.info("User log added");

    }

    @Override
    public List<UserLogDto> getAllCustomerLogs() {
        List<UserLog> userLogs = userLogRepository.findAllByRoleOrderByLoginDateDescLoginTimeDesc(Role.CUSTOMER);
        return UserLogMapper.toDtoList(userLogs);
    }

    @Override
    public List<UserLogDto> getAllAdminLogs() {
        List<UserLog> userLogs = userLogRepository.findAllByRoleOrderByLoginDateDescLoginTimeDesc(Role.ADMIN);
        return UserLogMapper.toDtoList(userLogs);
    }
}
