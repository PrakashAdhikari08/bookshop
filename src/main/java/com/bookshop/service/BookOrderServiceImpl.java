package com.bookshop.service;

import com.bookshop.dao.BookOrderRepository;
import com.bookshop.dao.BookRepository;
import com.bookshop.domain.book.Book;
import com.bookshop.domain.shopping.BookOrder;
import com.bookshop.domain.shopping.Status;
import com.bookshop.domain.user.User;
import com.bookshop.dto.BookOrderDto;
import com.bookshop.exception.BookDoesNotExistException;
import com.bookshop.mapper.BookOrderMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class BookOrderServiceImpl implements BookOrderService {

    private BookOrderRepository bookOrderRepository;

    private BookRepository bookRepository;

    public BookOrderServiceImpl(BookOrderRepository bookOrderRepository, BookRepository bookRepository) {
        this.bookOrderRepository = bookOrderRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    @Transactional
    public Integer orderABook(Integer userId, Integer bookId) {
        BookOrder bookOrder = new BookOrder();
        if (bookRepository.findById(bookId).get().getIsDeleted()) {
            log.error("Book Does not exist with book id : {}", bookId);
            throw new BookDoesNotExistException("Book Doesn't Exist");
        }
        bookOrder.setBook(new Book(bookId));
        bookOrder.setUser(new User(userId));
        bookOrder.setStatus(Status.INCOMPLETE);
        bookOrderRepository.save(bookOrder);
        log.info("Order Completed");

        return bookOrder.getId();

    }

    @Override
    public List<BookOrderDto> getCustomerAllOrder(Integer userId) {
        log.info("Requested for Customer Order.");

        List<BookOrder> bookOrders = bookOrderRepository.findAll().
                stream().filter(bookOrder -> bookOrder.getUser().getId() == userId)
                .collect(Collectors.toList());
        List<BookOrderDto> bookOrderDtos = BookOrderMapper.toDtoList(bookOrders);

        log.info("list of order for customer id : {} ==> {}", userId, bookOrderDtos);

        return bookOrderDtos;
    }

    @Override
    public List<BookOrderDto> getAllOrders() {
        log.info("Requested for All Order By ADMIN.");
        List<BookOrder> bookOrders = bookOrderRepository.findAll();
        List<BookOrderDto> bookOrderDtos = BookOrderMapper.toDtoList(bookOrders);
        return bookOrderDtos;
    }

    @Override
    public String confirmOrder(Integer id) {
        log.info("Confirm Booking Order for order id:{}", id);
        BookOrder bookOrder = bookOrderRepository.getById(id);
        bookOrder.setStatus(Status.COMPLETED);
        bookOrderRepository.save(bookOrder);
        return Status.COMPLETED.name();
    }

    @Override
    public String cancelOrder(Integer id) {
        log.info("Cancel Booking Order for order id:{}", id);
        BookOrder bookOrder = bookOrderRepository.getById(id);
        bookOrder.setStatus(Status.CANCELLED);
        bookOrderRepository.save(bookOrder);
        return Status.CANCELLED.name();
    }
}
