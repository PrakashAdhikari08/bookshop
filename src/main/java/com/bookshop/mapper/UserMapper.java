package com.bookshop.mapper;

import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;

import java.util.LinkedList;
import java.util.List;

public class UserMapper {

    public static User toEntity(UserDto userDto) {
        return User.builder().
                firstName(userDto.getFirstName()).lastName(userDto.getLastName())
                .address(userDto.getAddress()).birthDate(userDto.getBirthDate()).gender(userDto.getGender())
                .email(userDto.getEmail()).password(userDto.getPassword()).build();
    }

    public static UserDto toDto(User user) {
        return UserDto.builder()
                .Id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .birthDate(user.getBirthDate())
                .address(user.getAddress())
                .gender(user.getGender())
                .role(user.getRole())
                .email(user.getEmail())
                .lastLoggedIn(user.getLastLoggedIn())
                .lastUpdated(user.getLastUpdated())
                .enabled(!user.getIsDisabled())
                .build();
    }

    public static List<UserDto> toDtoList(List<User> userList) {
        List<UserDto> userDtoList = new LinkedList<>();
        userList.forEach(user -> {
            userDtoList.add(toDto(user));
        });
        return userDtoList;
    }
}
