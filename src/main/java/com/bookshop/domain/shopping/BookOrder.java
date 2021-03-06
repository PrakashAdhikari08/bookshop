package com.bookshop.domain.shopping;

import com.bookshop.domain.book.Book;
import com.bookshop.domain.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookOrder {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "optimized-sequence")
    private Integer Id;

    @OneToOne
    private Book book;

    @OneToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private Status status;

    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;

}
