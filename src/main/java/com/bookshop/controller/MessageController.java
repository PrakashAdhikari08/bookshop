package com.bookshop.controller;

import com.bookshop.domain.message.Message;
import com.bookshop.service.MessageService;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/message")
@CrossOrigin("http://localhost:3000")
@Slf4j
public class MessageController {

    private MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @ApiOperation("Send message for Both")
    @RequestMapping(value = "/send", method = RequestMethod.POST)
    public ResponseEntity<Message> registerUser(@RequestBody Message message) {
        log.info("Send Message from {} ", message.getSender().toString());
        Message success = messageService.saveMessage(message);
        return new ResponseEntity<>(success, HttpStatus.OK);
    }

    @ApiOperation("Get message for Both")
    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    public ResponseEntity<List<Message>> getMessage(@PathVariable Integer userId) {
        log.info("Get Message for User with user id {} ", userId);
        List<Message> messageList = messageService.getAllMessage(userId);
        return new ResponseEntity<>(messageList, HttpStatus.OK);
    }
}
