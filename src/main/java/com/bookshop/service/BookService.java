package com.bookshop.service;

import com.bookshop.domain.book.Book;
import com.bookshop.exception.BookAlreadyExistException;

public interface BookService {

    Integer addBook(Book book) throws BookAlreadyExistException;

    Boolean removeBook(Integer bookId);

    Object getAllBooks();
}
