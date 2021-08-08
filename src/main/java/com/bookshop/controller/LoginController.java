package com.bookshop.controller;


import com.bookshop.domain.jwt.JwtRequest;
import com.bookshop.domain.jwt.JwtResponse;
import com.bookshop.domain.user.User;
import com.bookshop.dto.ResponseUser;
import com.bookshop.dto.UserDto;
import com.bookshop.exception.InvalidUserException;
import com.bookshop.mapper.UserMapper;
import com.bookshop.security.CustomUserDetailsService;
import com.bookshop.security.jwt.JWTUtils;
import com.bookshop.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LoginController {

    private JWTUtils jwtUtils;

    private AuthenticationManager authenticationManager;

    private CustomUserDetailsService userDetailsService;

    private UserService userService;

    public LoginController(JWTUtils jwtUtils, AuthenticationManager authenticationManager, CustomUserDetailsService customerUserDetails,
                           UserService userService) {
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = customerUserDetails;
        this.userService = userService;
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    @ApiOperation("login Url for any user")
    //@CrossOrigin("http://localhost:3000")
    public JwtResponse authenticateUser (@RequestBody JwtRequest jwtRequest) throws Exception {
            try{
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                jwtRequest.getUsername(),
                                jwtRequest.getPassword()
                        )
                );
            }
            catch (Exception e){
                throw  new InvalidUserException("Invalid Credentials!!");
            }

            final UserDetails user = userDetailsService.loadUserByUsername(jwtRequest.getUsername());

            final String token = jwtUtils.generateToken(user);
            log.info("Logged in as a user with username -> {}",jwtRequest.getUsername());
            User user1 = userService.findByEmail(jwtRequest.getUsername());
            ResponseUser responseUser = new ResponseUser(user1.getId(), user1.getFirstName(), user1.getLastName(),
                    user1.getAddress(), user1.getBirthDate(), user1.getGender(), user1.getEmail(), user1.getRole());

            return new JwtResponse(token, responseUser);
    }

    @ExceptionHandler(InvalidUserException.class)
    public ResponseEntity<String> emailInuseException(){
        log.error("Invalid Credentials!!");
        return new ResponseEntity<>("Invalid Credentials!!.", HttpStatus.UNAUTHORIZED);
    }
}
