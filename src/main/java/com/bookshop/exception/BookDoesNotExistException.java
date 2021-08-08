package com.bookshop.exception;

public class BookDoesNotExistException extends RuntimeException {
    public BookDoesNotExistException(String s) {
        super(s);
    }
}
