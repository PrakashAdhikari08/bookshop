package com.bookshop.service;

import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;
import com.bookshop.exception.BookAlreadyExistException;

import java.util.List;

public interface BookService {

    Book addBook(Book book) throws BookAlreadyExistException;

    Boolean removeBook(Integer bookId);

    List<BookDto> getAllBooks();
}
