package com.bookshop.domain.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@DynamicUpdate
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "optimized-sequence")
    private Integer Id;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String address;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDateTime lastLoggedIn;

    @UpdateTimestamp
    private LocalDateTime lastUpdated;

    @NotNull
    private String email;

    @NotNull
    @Column(columnDefinition = "boolean default false")
    private Boolean isDisabled;

    @NotNull
    private String password;

    private Integer resetToken;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Role role;

    public User(Integer userId) {
        this.Id = userId;
    }
}
