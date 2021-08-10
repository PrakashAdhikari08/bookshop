package com.bookshop.dto;

import com.bookshop.domain.user.Gender;
import com.bookshop.domain.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseUser {

    private Integer Id;

    private String firstName;

    private String lastName;

    private String address;

    private LocalDate birthDate;

    private Gender gender;

    private String email;

    private Role role;
}
