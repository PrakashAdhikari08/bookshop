package com.bookshop.service;

import com.bookshop.domain.log.UserLog;
import com.bookshop.dto.UserLogDto;

import java.util.List;

public interface UserLogService {
    void addLog(UserLog userLog);

    List<UserLogDto> getAllCustomerLogs();

    List<UserLogDto> getAllAdminLogs();
}
