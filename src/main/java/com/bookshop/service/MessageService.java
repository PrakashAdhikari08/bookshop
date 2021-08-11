package com.bookshop.service;

import com.bookshop.domain.message.Message;

import java.util.List;

public interface MessageService {

    Message saveMessage(Message message);

    List<Message> getAllMessage(Integer userId);
}
