package com.bookshop.dao;

import com.bookshop.domain.message.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Integer> {

    List<Message> findAllByUserId(Integer userId);

}
