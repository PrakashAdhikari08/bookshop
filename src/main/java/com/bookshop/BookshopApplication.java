package com.bookshop;

import com.bookshop.dao.UserRepository;
import com.bookshop.domain.user.Gender;
import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;
import com.bookshop.mapper.UserMapper;
import com.bookshop.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Properties;
import java.util.Random;
import java.util.Scanner;

@SpringBootApplication
@Slf4j
public class BookshopApplication {

    public static void main(String[] args) {
        RestTemplate restTemplate = new RestTemplate();

        SpringApplication.run(BookshopApplication.class, args);
    }



}
