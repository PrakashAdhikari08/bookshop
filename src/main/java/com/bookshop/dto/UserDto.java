package com.bookshop.dto;

import com.bookshop.domain.user.Gender;
import com.bookshop.domain.user.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private Integer Id;

    private String firstName;

    private String lastName;

    private String address;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    private Gender gender;

    private LocalDateTime lastUpdated;

    private LocalDateTime lastLoggedIn;

    private String email;

    private boolean isEnabled;

    @Setter(AccessLevel.NONE)
    private String password;
    private Role role;

    public void setPassword(String password) {
        this.password =
                new BCryptPasswordEncoder().encode(password);
    }
}
