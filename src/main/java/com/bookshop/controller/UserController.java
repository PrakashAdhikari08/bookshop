package com.bookshop.controller;


import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.dto.ChangePasswordDto;
import com.bookshop.dto.UserDto;
import com.bookshop.mapper.UserMapper;
import com.bookshop.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "api/user")
@Slf4j
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation("Register a new user")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto) {
        User user = UserMapper.toEntity(userDto);
        user.setRole(Role.CUSTOMER);
        log.info("User received for register: {} {}", user.getFirstName(), user.getLastName());
        try {
            userService.registerUser(user);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exits.");
        }
        return new ResponseEntity<>("Registered, Login with Credential!!", HttpStatus.CREATED);
    }

    @ApiOperation("Edit Profile By an User")
    @RequestMapping(value = "/profile/edit/{userId}", method = RequestMethod.PUT)
    public ResponseEntity<UserDto> updateProfile(@RequestBody UserDto userDto, @PathVariable Integer userId) {
//        User user = UserMapper.toEntity(userDto);/
//        log.info("Updating the profile of the user -> {} {}", userDto.getFirstName(), userDto.getLastName());
        userDto.setId(userId);
        UserDto userDto1 = userService.updateUser(userDto);
        if (userDto1 == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User Not Found with userId " + userId);
        }
        log.info("Profile Updated for {} {}", userDto1.getFirstName(), userDto1.getLastName());
        return new ResponseEntity<>(userDto1, HttpStatus.OK);
    }

    @ApiOperation("All Customer User List")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserDto>> getAllCustomer() {
        List<UserDto> userDtoList = userService.fetchAllCustomer();
        return new ResponseEntity<>(userDtoList, HttpStatus.OK);
    }

    @ApiOperation("Disable/Enable Customer By Admin")
    @RequestMapping(value = "/change-status/{customerId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<UserDto> changeCustomerAccountStatus(@PathVariable Integer customerId, @RequestParam(name = "status", required = false, defaultValue = "false") Boolean status) {
        UserDto response = userService.changeStatus(customerId, status);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ApiOperation("Change Password for All")
    @RequestMapping(value = "/change-password", method = RequestMethod.PUT)
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordDto changePasswordDto) {
        String message = userService.changePassword(changePasswordDto);
        if (message == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User does not exits!!!");
        } else if (message.equals("NO_MATCH_PASSWORD")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password does not match!!!");
        }
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
