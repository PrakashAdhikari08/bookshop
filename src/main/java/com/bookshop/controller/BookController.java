package com.bookshop.controller;

import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;
import com.bookshop.exception.BookAlreadyExistException;
import com.bookshop.exception.EmailAlreadyRegisteredException;
import com.bookshop.mapper.BookMapper;
import com.bookshop.service.BookService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
@Slf4j
//@CrossOrigin("http://localhost:3000")
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @ApiOperation("Adding book by Admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<String> addBook(@RequestBody BookDto bookDto) throws BookAlreadyExistException {
        Book book = BookMapper.toEntity(bookDto);
        book.setIsDeleted(Boolean.FALSE);
        Integer bookId = bookService.addBook(book);
        return new ResponseEntity<>("Book Added with Id -> " + bookId, HttpStatus.CREATED);
    }

    @ApiOperation("Remove Book By Admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/delete/{bookId}", method = RequestMethod.GET)
    public ResponseEntity<String> removeBook(@PathVariable Integer bookId){
        Boolean deletedStatus = bookService.removeBook(bookId);
        if(deletedStatus)
            return new ResponseEntity<>("Book Deleted",HttpStatus.OK);
        else
            return new ResponseEntity<>("Could not delete the book. The ID does not exist.", HttpStatus.BAD_REQUEST);
    }

    @ApiOperation("Get All Book By Admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<BookDto>> getAllBooks(){
        return new ResponseEntity(bookService.getAllBooks(), HttpStatus.OK);
    }

    @ExceptionHandler(BookAlreadyExistException.class)
    public ResponseEntity<String> emailInuseException(){
        log.error("Book Name already registered");
        return new ResponseEntity<>("Book Name already registered", HttpStatus.BAD_REQUEST);
    }
}
