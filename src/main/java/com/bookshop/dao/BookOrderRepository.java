package com.bookshop.dao;

import com.bookshop.domain.shopping.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookOrderRepository extends JpaRepository<BookOrder, Integer> {
}
