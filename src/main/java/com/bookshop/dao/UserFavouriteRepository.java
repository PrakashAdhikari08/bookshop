package com.bookshop.dao;

import com.bookshop.domain.favourite.UserFavourite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserFavouriteRepository extends JpaRepository<UserFavourite, Integer> {

    UserFavourite getByBookIdAndUserId(Integer bookId, Integer userId);

    List<UserFavourite> getAllByUserId(Integer userId);
}
