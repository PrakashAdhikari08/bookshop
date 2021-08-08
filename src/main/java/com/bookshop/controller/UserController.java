package com.bookshop.controller;


import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;
import com.bookshop.exception.EmailAlreadyRegisteredException;
import com.bookshop.mapper.UserMapper;
import com.bookshop.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping(value = "/user")
//@CrossOrigin("http://localhost:3000")
@Slf4j
public class UserController {

    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @ApiOperation("Register a new user")
    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto){
        User user = UserMapper.toEntity(userDto);
        user.setRole(Role.CUSTOMER);
        log.info("User received for register: {} {}", user.getFirstName(), user.getLastName());
        Integer userId = userService.registerUser(user);
        return new ResponseEntity<>("Successfully Registered with User Id -> "+ userId, HttpStatus.CREATED);
    }

    @ApiOperation("Edit Profile By an User")
    @RequestMapping(value = "/profile/edit/{userId}", method = RequestMethod.PUT)
    public ResponseEntity<String> updateProfile(@RequestBody UserDto userDto, @PathVariable Integer userId){
        User user = UserMapper.toEntity(userDto);
        log.info("Updating the profile of the user -> {} {}", user.getFirstName(), user.getLastName());
        userService.updateUser(user, userId);
        log.info("Profile Updated for {} {}", user.getFirstName(), user.getLastName());
        return new ResponseEntity<>("Successfully Updated profile", HttpStatus.CREATED);
    }

    @ApiOperation("Disable/Enable Customer By Admin")
    @RequestMapping(value = "/change-status/{customerId}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> changeCustomerAccountStatus(@PathVariable Integer customerId, @RequestParam (name = "status" ,required = false, defaultValue = "false") Boolean status){
        String response = userService.changeStatus(customerId, status);
        return new ResponseEntity<>("Account " + response + " for customer with id -> " + customerId, HttpStatus.OK);
    }

    @ExceptionHandler(EmailAlreadyRegisteredException.class)
    public ResponseEntity<String> emailInuseException(){
        log.error("Email already taken so try with new email address");
        return new ResponseEntity<>("Email already in use.", HttpStatus.BAD_REQUEST);
    }
}
