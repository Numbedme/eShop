package com.numbedme.app.controller;

import com.numbedme.app.exception.InvalidLoginException;
import com.numbedme.app.model.Customer;
import com.numbedme.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by User on 07.03.2017.
 */
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService service;

    @RequestMapping(value = "/{login}",method = RequestMethod.GET)
    public Customer getCustomerByLogin(@PathVariable("login") String login){
        return service.findByLogin(login);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createCustomer(Customer customer){

        if (service.findByLogin(customer.getLogin())!= null){
            throw new InvalidLoginException("Duplicate login " + customer.getLogin());
        }

        service.persistCustomer(customer);
    }

    @RequestMapping(value = "/{login}",method = RequestMethod.PUT)
    public void editCustomer(Customer customer, @PathVariable("login") String login){
        if (login.equals(customer.getLogin())) {
            service.updateCustomer(customer);
        }
    }

    @RequestMapping(value = "/{login}",method = RequestMethod.DELETE)
    public void deleteCustomer(@PathVariable("login") String login){
            service.deleteCustomer(service.findByLogin(login));
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Customer> allCustomers(){
        return  service.findAllCustomers();
    }


}
