package com.bookshop.controller;

import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;
import com.bookshop.exception.BookAlreadyExistException;
import com.bookshop.mapper.BookMapper;
import com.bookshop.service.BookService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/book")
@Slf4j
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @ApiOperation("Adding book by Admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<BookDto> addBook(@RequestBody BookDto bookDto) throws BookAlreadyExistException {
        Book book = BookMapper.toEntity(bookDto);
        book.setIsDeleted(Boolean.FALSE);
        BookDto bookDto1;
        try {
            bookDto1 = BookMapper.toDto(bookService.addBook(book));
        } catch (BookAlreadyExistException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book Name already registered");
        }
        return new ResponseEntity<>(bookDto1, HttpStatus.CREATED);
    }

    @ApiOperation("Remove Book By Admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/delete/{bookId}", method = RequestMethod.DELETE)
    public ResponseEntity<String> removeBook(@PathVariable Integer bookId) {
        Boolean deletedStatus = bookService.removeBook(bookId);
        if (deletedStatus)
            return new ResponseEntity<>("Book Deleted", HttpStatus.OK);
        else
            return new ResponseEntity<>("Could not delete the book. The Book does not exist.", HttpStatus.BAD_REQUEST);
    }

    @ApiOperation("Get All Book For All")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<BookDto>> getAllBooks() {
        return new ResponseEntity(bookService.getAllBooks(), HttpStatus.OK);
    }

}
