package com.bookshop.exception;

public class EmailAlreadyRegisteredException extends RuntimeException {
    public EmailAlreadyRegisteredException(String email_already_in_use) {
        super(email_already_in_use);
    }
}
