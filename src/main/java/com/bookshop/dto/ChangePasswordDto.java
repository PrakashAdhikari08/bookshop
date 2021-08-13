package com.bookshop.dto;

import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChangePasswordDto {
    private Integer userId;
    @Setter(AccessLevel.NONE)
    private String password;
    @Setter(AccessLevel.NONE)
    private String oldPassword;

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = new BCryptPasswordEncoder().encode(oldPassword);
    }

}
