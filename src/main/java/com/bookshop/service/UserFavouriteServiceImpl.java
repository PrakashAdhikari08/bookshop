package com.bookshop.service;

import com.bookshop.dao.BookRepository;
import com.bookshop.dao.UserFavouriteRepository;
import com.bookshop.domain.book.Book;
import com.bookshop.domain.favourite.UserFavourite;
import com.bookshop.dto.FavouriteBookDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class UserFavouriteServiceImpl implements UserFavouriteService {

    private UserFavouriteRepository userFavouriteRepository;
    private BookRepository bookRepository;

    public UserFavouriteServiceImpl(UserFavouriteRepository userFavouriteRepository, BookRepository bookRepository) {
        this.userFavouriteRepository = userFavouriteRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    public Boolean addToFavourite(Integer userId, Integer bookId) {
        UserFavourite userFavourite = userFavouriteRepository.getByBookIdAndUserId(bookId, userId);
        if (userFavourite == null) {
            userFavourite = new UserFavourite();
            userFavourite.setUserId(userId);
            userFavourite.setBookId(bookId);
            userFavouriteRepository.save(userFavourite);
        }
        return Boolean.TRUE;
    }

    @Override
    public Boolean removeFromFavourite(Integer userId, Integer bookId) {
        UserFavourite userFavourite = userFavouriteRepository.getByBookIdAndUserId(bookId, userId);
        if (userFavourite != null) userFavouriteRepository.delete(userFavourite);
        return Boolean.FALSE;
    }

    @Override
    public List<FavouriteBookDto> getFavouriteBooksList(Integer userId) {
        List<UserFavourite> userFavouriteList = userFavouriteRepository.getAllByUserId(userId);
        List<FavouriteBookDto> favouriteBookDtoList = new ArrayList<>();
        userFavouriteList.forEach(userFavourite -> {
            Book book = bookRepository.getById(userFavourite.getBookId());
            favouriteBookDtoList.add(new FavouriteBookDto(book.getId(), userId, book.getBookName(), book.getAuthorName(), book.getPrice()));
        });
        return favouriteBookDtoList;
    }
}
