package com.bookshop.mapper;

import com.bookshop.domain.shopping.BookOrder;
import com.bookshop.dto.BookOrderDto;

import java.util.ArrayList;
import java.util.List;

public class BookOrderMapper {

    public static BookOrderDto toDto(BookOrder bookOrder){
        return BookOrderDto.builder()
                .orderId(bookOrder.getId())
                .status(bookOrder.getStatus())
                .orderDate(bookOrder.getOrderDate())
                .userId(bookOrder.getUser().getId())
                .customerName(bookOrder.getUser().getFirstName() + " " + bookOrder.getUser().getLastName())
                .book(bookOrder.getBook())
                .build();
    }

    public static List<BookOrderDto> toDtoList(List<BookOrder> bookOrders){
        List<BookOrderDto> bookOrderDtos = new ArrayList<>();

        bookOrders.forEach(bookOrder -> bookOrderDtos.add(toDto(bookOrder)));

        return bookOrderDtos;
    }
}
