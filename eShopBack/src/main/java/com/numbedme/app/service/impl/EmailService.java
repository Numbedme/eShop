package com.numbedme.app.service.impl;

import com.numbedme.app.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

/**
 * Created by User on 16.03.2017.
 */

@Service
public class EmailService implements MessageService {

    /*@Autowired
    private MailSender sender;*/

    @Override
    public void sendMessage(String to, String from, String message, String subject) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(from);
        msg.setText(message);
        msg.setSubject(subject);
        msg.setTo(to);

        //sender.send(msg);
    }


}
