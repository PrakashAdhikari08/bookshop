package com.bookshop.dao;

import com.bookshop.domain.shopping.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookOrderRepository extends JpaRepository<BookOrder, Integer> {
}
