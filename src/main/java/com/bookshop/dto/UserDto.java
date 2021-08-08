package com.bookshop.dto;

import com.bookshop.domain.user.Gender;
import com.bookshop.domain.user.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

    private LocalDate birthDate;

    private Gender gender;

    private LocalDateTime lastUpdated;

    private LocalDateTime lastLoggedIn;

    private String email;

    private boolean isEnabled;

    @Setter(AccessLevel.NONE)
    private String password;

    public void setPassword(String password){
        this.password =
                new BCryptPasswordEncoder().encode(password);
    }


    private Role role;
}
