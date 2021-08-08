package com.bookshop.exception;

public class BookAlreadyExistException extends Throwable {
    public BookAlreadyExistException(String book_already_exists) {
        super(book_already_exists);
    }
}
