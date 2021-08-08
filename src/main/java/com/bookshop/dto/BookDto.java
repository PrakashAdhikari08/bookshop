package com.bookshop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookDto {

    private Integer Id;

    private String authorName;

    private String description;

    private Double price;

    private String bookName;
}
