package com.bookshop.mapper;

import com.bookshop.domain.log.UserLog;
import com.bookshop.dto.UserLogDto;

import java.util.ArrayList;
import java.util.List;

public class UserLogMapper {

    public static UserLogDto toDto(UserLog userLog){
        return UserLogDto.builder()
                .name(userLog.getName())
                .username(userLog.getUsername())
                .loginDate(userLog.getLoginDate())
                .loginTime(userLog.getLoginTime())
                .build();
    }

    public static List<UserLogDto> toDtoList(List<UserLog> userLogs){
        List<UserLogDto> userLogDtos = new ArrayList<>();

        userLogs.forEach(userLog -> userLogDtos.add(toDto(userLog)));

        return userLogDtos;
    }
}
