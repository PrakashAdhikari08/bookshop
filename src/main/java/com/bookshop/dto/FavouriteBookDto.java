package com.bookshop.dto;

public class FavouriteBookDto {
    Integer bookId;
    Integer userId;
    String bookName;
    String authorName;
    Double price;

    public FavouriteBookDto(Integer bookId, Integer userId, String bookName, String authorName, Double price) {
        this.bookId = bookId;
        this.userId = userId;
        this.bookName = bookName;
        this.authorName = authorName;
        this.price = price;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
