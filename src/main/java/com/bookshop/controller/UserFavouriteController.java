package com.bookshop.controller;

import com.bookshop.dto.FavouriteBookDto;
import com.bookshop.service.UserFavouriteService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin("http://localhost:3000")
@RequestMapping("/favourite")
public class UserFavouriteController {

    private UserFavouriteService userFavouriteService;

    public UserFavouriteController(UserFavouriteService userFavouriteService) {
        this.userFavouriteService = userFavouriteService;
    }

    @ApiOperation("Add a book to favourite Customer Only")
    @RequestMapping(value = "/add", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<String> addToFavourite(@RequestParam Integer userId, @RequestParam Integer bookId) {
        log.info("Add Favourite Book with user id is {} and book id is {}", userId, bookId);
        Boolean aBoolean = userFavouriteService.addToFavourite(userId, bookId);
        return new ResponseEntity(aBoolean, HttpStatus.CREATED);
    }

    @ApiOperation("Remove a book from favourite Customer Only")
    @RequestMapping(value = "/remove", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<String> removeFromFavourite(@RequestParam Integer userId, @RequestParam Integer bookId) {
        log.info("Remove Favourite Book with user id is {} and book id is {}", userId, bookId);
        Boolean aBoolean = userFavouriteService.removeFromFavourite(userId, bookId);
        return new ResponseEntity(aBoolean, HttpStatus.OK);
    }

    @ApiOperation("Get All favourite books list Customer Only")
    @RequestMapping(value = "/books", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('CUSTOMER')")
    public ResponseEntity<String> allFavouriteBooks(@RequestParam Integer userId) {
        log.info("Favourite Books of user with user id  {}", userId);
        List<FavouriteBookDto> favouriteBookDtoList = userFavouriteService.getFavouriteBooksList(userId);
        return new ResponseEntity(favouriteBookDtoList, HttpStatus.OK);
    }
}
