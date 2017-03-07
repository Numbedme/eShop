package com.numbedme.app.repository;

import com.numbedme.app.model.Customer;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by User on 06.03.2017.
 */

public interface CustomerRepository {
    Customer findById(int id);

    void updateCustomer(Customer customer);

    void deleteCustomer(Customer customer);

    void persistCustomer(Customer customer);

    List<Customer> findAllCustomers();
}
