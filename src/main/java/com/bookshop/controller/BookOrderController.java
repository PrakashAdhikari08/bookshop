package com.bookshop.controller;

import com.bookshop.dto.BookOrderDto;
import com.bookshop.exception.BookDoesNotExistException;
import com.bookshop.service.BookOrderService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
@Slf4j
@CrossOrigin("http://localhost:3000")
@RequestMapping("/order")
public class BookOrderController {

    private BookOrderService bookOrderService;

    public BookOrderController(BookOrderService bookOrderService) {
        this.bookOrderService = bookOrderService;
    }

    @ApiOperation("Order a book at a time")
    @RequestMapping(value = "/book", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<String> orderABook(@RequestParam Integer userId, @RequestParam Integer bookId) {
        log.info("The user id is {} and book id is {}", userId, bookId);
        Integer orderNumber = bookOrderService.orderABook(userId, bookId);
        return new ResponseEntity("Order Made with order id -> " + orderNumber, HttpStatus.CREATED);
    }

    @ApiOperation("Get Book Ordered for User")
    @RequestMapping(value = "/my-order/{userId}", method = RequestMethod.GET)
    public ResponseEntity<List<BookOrderDto>> getCustomerAllOrders(@PathVariable Integer userId) {
        List<BookOrderDto> bookOrderDtos = bookOrderService.getCustomerAllOrder(userId);

        return new ResponseEntity(bookOrderDtos, HttpStatus.OK);
    }

    @ApiOperation("Get All Order Only for Admin Use")
    @RequestMapping(value = "/book/all", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<BookOrderDto>> getAllExistingOrders() {
        List<BookOrderDto> bookOrderDtos = bookOrderService.getAllOrders();
        return new ResponseEntity(bookOrderDtos, HttpStatus.OK);
    }

    @ApiOperation("Confirm Order Only for Admin Use")
    @RequestMapping(value = "/confirm-order/{id}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> confirmOrder(@PathVariable Integer id) {
        String message = bookOrderService.confirmOrder(id);
        return new ResponseEntity(message, HttpStatus.OK);
    }

    @ApiOperation("Cancel Order Only for Admin Use")
    @RequestMapping(value = "/cancel-order/{id}", method = RequestMethod.GET)
//    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> cancelOrder(@PathVariable Integer id) {
        String message = bookOrderService.cancelOrder(id);
        return new ResponseEntity(message, HttpStatus.OK);
    }

    @ExceptionHandler(BookDoesNotExistException.class)
    public ResponseEntity<String> emailInuseException() {
        log.error("Book Not Found in DB to Order");
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book Not Found/Exist");
//        return new ResponseEntity<>("Book Not Found/Exist", HttpStatus.BAD_REQUEST);
    }

}
