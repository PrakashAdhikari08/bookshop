package com.bookshop.mapper;

import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;

import java.util.ArrayList;
import java.util.List;

public class BookMapper {

    public static Book toEntity(BookDto bookDto) {
        return Book.builder()
                .authorName(bookDto.getAuthorName())
                .description(bookDto.getDescription())
                .price(bookDto.getPrice())
                .bookName(bookDto.getBookName())
                .build();
    }

    public static BookDto toDto(Book book) {
        return BookDto.builder()
                .Id(book.getId())
                .authorName(book.getAuthorName())
                .description(book.getDescription())
                .price(book.getPrice())
                .bookName(book.getBookName())
                .build();
    }

    public static List<BookDto> toDtoList(List<Book> books) {
        List<BookDto> bookDtoList = new ArrayList<>();
        books.forEach(book -> {
            bookDtoList.add(toDto(book));
        });
        return bookDtoList;
    }
}
