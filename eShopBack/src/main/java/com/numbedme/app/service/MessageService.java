package com.numbedme.app.service;

/**
 * Created by User on 16.03.2017.
 */
public interface MessageService {

    void sendMessage(String to, String from, String message, String subject);
}
