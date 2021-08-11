package com.bookshop.service;

import com.bookshop.dto.BookOrderDto;

import java.util.List;

public interface BookOrderService {

    Integer orderABook(Integer userId, Integer bookId);

    List<BookOrderDto> getCustomerAllOrder(Integer customerId);

    List<BookOrderDto> getAllOrders();

    BookOrderDto confirmOrder(Integer id);

    BookOrderDto cancelOrder(Integer id);
}
