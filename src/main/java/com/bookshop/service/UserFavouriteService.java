package com.bookshop.service;

import com.bookshop.dto.FavouriteBookDto;

import java.util.List;

public interface UserFavouriteService {

    Boolean addToFavourite(Integer userId, Integer bookId);

    Boolean removeFromFavourite(Integer userId, Integer bookId);

    List<FavouriteBookDto> getFavouriteBooksList(Integer userId);

}
