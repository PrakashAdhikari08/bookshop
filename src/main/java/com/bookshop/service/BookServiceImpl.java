package com.bookshop.service;

import com.bookshop.dao.BookRepository;
import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;
import com.bookshop.exception.BookAlreadyExistException;
import com.bookshop.mapper.BookMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book addBook(Book book) throws BookAlreadyExistException {
        if (bookRepository.findBookByBookName(book.getBookName()) != null)
            throw new BookAlreadyExistException("Book Already Exists");

        Book book1 = bookRepository.save(book);
        log.info("Booked saved with book name -> {}", book1.getBookName());
        return book1;

    }

    @Override
    @Transactional
    public Boolean removeBook(Integer bookId) {
        log.info("deleting the book with book id -> {}", bookId);
        if (bookRepository.findById(bookId).isPresent()) {
            bookRepository.findById(bookId).get().setIsDeleted(Boolean.TRUE);
            log.info("Book Deleted");
            return true;
        } else {
            log.warn("Book ID doesn't exist");
            return false;
        }
    }

    @Override
    public List<BookDto> getAllBooks() {
        log.info("Fetching all the books.");
        List<Book> books = bookRepository.findAll();
        List<BookDto> bookDtos = BookMapper.toDtoList(books.stream().filter(book -> book.getIsDeleted() == false).collect(Collectors.toList()));
        return bookDtos;
    }


}
