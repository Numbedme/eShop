package com.numbedme.app.service.impl;

import com.numbedme.app.model.Customer;
import com.numbedme.app.repository.CustomerRepository;
import com.numbedme.app.service.CustomerService;
import com.numbedme.app.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by User on 07.03.2017.
 */
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;

    @Autowired
    private MessageService messageService;

    @Override
    public Customer findById(int id) {
        return repository.findById(id);
    }

    @Override
    public Customer findByLogin(String login) {
        return repository.findByLogin(login);
    }

    @Override
    public void updateCustomer(Customer customer) {
        repository.updateCustomer(customer);
    }

    @Override
    public void deleteCustomer(Customer customer) {
        repository.deleteCustomer(customer);
    }

    @Override
    public void persistCustomer(Customer customer) {
        repository.persistCustomer(customer);
        try {
            messageService.sendMessage(customer.getEmail(), "test@gmail.com", "Hello form eShop!", "Welcome to our site, now you can add products or buy something from others.");
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    @Override
    public List<Customer> findAllCustomers() {
        return repository.findAllCustomers();
    }
}
