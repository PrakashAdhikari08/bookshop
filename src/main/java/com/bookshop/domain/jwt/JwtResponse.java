package com.bookshop.domain.jwt;

import com.bookshop.dto.ResponseUser;
import com.bookshop.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {

    private String token;

    private ResponseUser responseUser;
}
