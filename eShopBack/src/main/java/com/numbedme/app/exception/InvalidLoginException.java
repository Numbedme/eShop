package com.numbedme.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by User on 10.03.2017.
 */

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE, reason = "Invalid login")
public class InvalidLoginException extends RuntimeException {

    public InvalidLoginException(String message) {
        super(message);
    }
}
