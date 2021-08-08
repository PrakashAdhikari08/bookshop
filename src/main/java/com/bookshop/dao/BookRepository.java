package com.bookshop.dao;

import com.bookshop.domain.book.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
    Book findBookByBookName(String bookName);


}
