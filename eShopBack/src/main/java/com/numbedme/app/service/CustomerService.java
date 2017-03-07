package com.numbedme.app.service;

import com.numbedme.app.model.Customer;

import java.util.List;

/**
 * Created by User on 07.03.2017.
 */
public interface CustomerService {
    Customer findById(int id);

    Customer findByLogin(String login);

    void updateCustomer(Customer customer);

    void deleteCustomer(Customer customer);

    void persistCustomer(Customer customer);

    List<Customer> findAllCustomers();
}
