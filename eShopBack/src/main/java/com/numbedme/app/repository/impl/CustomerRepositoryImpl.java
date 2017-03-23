package com.numbedme.app.repository.impl;

import com.numbedme.app.model.Customer;
import com.numbedme.app.repository.AbstractRepository;
import com.numbedme.app.repository.CustomerRepository;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by User on 07.03.2017.
 */
@Repository
public class CustomerRepositoryImpl extends AbstractRepository<Integer, Customer> implements CustomerRepository {
    @Override
    public Customer findById(int id) {
        return getByKey(id);
    }

    @Override
    public Customer findByLogin(String login) {
        return (Customer) createEntityCriteria().add(Restrictions.eq("login", login)).uniqueResult();
    }

    @Override
    public void updateCustomer(Customer customer) {
        Customer cache = findById(customer.getId());

        cache.setPassword(customer.getPassword());
        cache.setPicture(customer.getPicture());
        cache.setEmail(customer.getEmail());

        update(cache);
    }

    @Override
    public void deleteCustomer(Customer customer) {
        delete(customer);
    }

    @Override
    public void registerCustomer(Customer customer) {
        persist(customer);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Customer> findAllCustomers() {
        return (List<Customer>)createEntityCriteria().list();
    }
}
