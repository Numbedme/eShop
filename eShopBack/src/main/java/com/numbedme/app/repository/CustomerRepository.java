package com.numbedme.app.repository;

import com.numbedme.app.model.entity.Customer;

import java.util.List;

/**
 * Created by User on 06.03.2017.
 */

public interface CustomerRepository {
    Customer findById(int id);

    Customer findByLogin(String login);

    void updateCustomer(Customer customer);

    void deleteCustomer(Customer customer);

    void registerCustomer(Customer customer);

    List<Customer> findAllCustomers();
}
