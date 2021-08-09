package com.bookshop.service;

import com.bookshop.domain.message.Message;

import java.util.List;

public interface MessageService {

    Boolean saveMessage(Message message);

    List<Message> getAllMessage(Integer userId);
}
