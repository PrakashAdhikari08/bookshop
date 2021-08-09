package com.bookshop.controller;

import com.bookshop.domain.log.UserLog;
import com.bookshop.dto.UserLogDto;
import com.bookshop.service.UserLogService;
import com.bookshop.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "/logs")
@PreAuthorize("hasAuthority('ADMIN')")
public class UserLogController {

    private UserLogService userLogService;

    public UserLogController(UserLogService userLogService) {
        this.userLogService = userLogService;
    }

    @ApiOperation("Order a book at a time")
    @RequestMapping(value = "/customer", method = RequestMethod.GET)
    public ResponseEntity<List<UserLogDto>> getAllCustomerLogs(){
        List<UserLogDto> userLogDtos = userLogService.getAllCustomerLogs();

        return new ResponseEntity<>(userLogDtos, HttpStatus.OK);
    }

    @ApiOperation("Order a book at a time")
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public ResponseEntity<List<UserLogDto>> getAllAdminLogs(){
        List<UserLogDto> userLogDtos = userLogService.getAllAdminLogs();

        return new ResponseEntity<>(userLogDtos, HttpStatus.OK);
    }




}
