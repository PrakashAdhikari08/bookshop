package com.bookshop.domain.book;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "optimized-sequence")

    private Integer Id;

    @NotNull
    private String authorName;

    @NotNull
    private String bookName;

    private String description;

    private Boolean isDeleted;

    @NotNull
    private Double price;

    public Book(Integer bookId) {
        this.Id = bookId;
    }
}
