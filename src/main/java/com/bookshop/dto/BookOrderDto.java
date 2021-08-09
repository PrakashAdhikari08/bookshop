package com.bookshop.dto;

import com.bookshop.domain.book.Book;
import com.bookshop.domain.shopping.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookOrderDto {

    private Integer orderId;

    private Status status;

    private LocalDate orderDate;

    private Integer userId;

    private String customerName;

    private Book book;


}
