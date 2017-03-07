package com.numbedme.app.controller;

import com.numbedme.app.model.Customer;
import com.numbedme.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by User on 07.03.2017.
 */
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService service;

    @RequestMapping(value = "/{login}",method = RequestMethod.GET)
    public Customer getCustomerByLogin(@PathVariable("login") String login){
        return service.findByLogin(login);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createCustomer(Customer customer){
        service.persistCustomer(customer);
    }


}
