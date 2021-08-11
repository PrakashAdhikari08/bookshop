package com.bookshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

    @RequestMapping(value = {"/","/login","/register","/forget-password",
            "/books","/customers","/orders","/user-log",
            "/profile","/change-password","/admin-message/**",
            "/user-message","/favorites-books"},method = RequestMethod.GET)
    public String index() {
        return "index";
    }

}
