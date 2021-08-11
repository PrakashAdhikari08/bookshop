package com.bookshop.service;

import com.bookshop.dao.MessageRepository;
import com.bookshop.domain.message.Message;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService {

    private MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Message> getAllMessage(Integer userId) {
        List<Message> userMessage = messageRepository.findAllByUserId(userId);
        return userMessage.stream().sorted(Comparator.comparing(Message::getDateTime)).collect(Collectors.toList());
    }
}
