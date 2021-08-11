package com.bookshop.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FavouriteBookDto {
    Integer bookId;
    Integer userId;
    String bookName;
    String authorName;
    Double price;
}
