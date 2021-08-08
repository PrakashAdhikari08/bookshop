package com.bookshop.domain.favourite;

import com.bookshop.domain.book.Book;
import com.bookshop.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserFavourite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "optimized-sequence")
    private Integer Id;


    private Integer userId;


    private Integer bookId;
}
