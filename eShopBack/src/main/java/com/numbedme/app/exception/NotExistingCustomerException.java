package com.numbedme.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by User on 15.03.2017.
 */

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE, reason = "No customer")
public class NotExistingCustomerException extends RuntimeException {
    public NotExistingCustomerException(String s) {
        super(s);
    }
}
