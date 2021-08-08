package com.bookshop.service;

import com.bookshop.domain.book.Book;
import com.bookshop.dto.BookDto;
import com.bookshop.dto.BookOrderDto;

import java.util.List;

public interface BookOrderService {

    Integer orderABook(Integer userId, Integer bookId);

    List<BookOrderDto> getCustomerAllOrder(Integer customerId);

    List<BookOrderDto> getAllOrders();

    String confirmOrder(Integer id);

    String cancelOrder(Integer id);
}
