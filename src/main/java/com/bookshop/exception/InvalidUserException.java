package com.bookshop.exception;

public class InvalidUserException extends RuntimeException {
    public InvalidUserException(String s) {
        super(s);
    }
}
