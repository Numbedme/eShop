package com.numbedme.app.repository.impl;

import com.numbedme.app.model.entity.Product;
import com.numbedme.app.repository.AbstractRepository;
import com.numbedme.app.repository.ProductRepository;
import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by User on 15.02.2017.
 */

@Repository
public class ProductRepositoryImpl extends AbstractRepository<Integer, Product> implements ProductRepository {
    @Override
    public Product findById(int id) {
        return getByKey(id);
    }

    @Override
    public void updateProduct(Product product) {
        Product cache = findById(product.getId());

        cache.setName(product.getName());
        cache.setStartDate(product.getStartDate());
        cache.setDescription(product.getDescription());
        cache.setPicture(product.getPicture());
        cache.setPrice(product.getPrice());
        cache.setCustomer(product.getCustomer());

        update(product);
    }

    @Override
    public void deleteProduct(Product product) {
        delete(product);
    }

    @Override
    public void persistProduct(Product product) {
        update(product);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Product> findAllProducts() {
        return (List<Product>)createEntityCriteria().list();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Product> findByPattern(String pattern) {
        return (List<Product>)createEntityCriteria().add(Restrictions.like("name", pattern, MatchMode.ANYWHERE)).list();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Product> findProductsOnPageByPattern(String pattern, Integer page, Integer amount) {
        Query query = getSession().createQuery("SELECT p from Product p WHERE name LIKE :pattern ORDER BY startDate desc");
        query.setParameter("pattern", "%" + pattern + "%");
        query.setFirstResult((page * amount) - amount);
        query.setMaxResults(amount);
        return query.list();
    }

    @Override
    public long amountOfProducts(String pattern) {
        Query query = getSession().createQuery("SELECT count(p.id) from Product p WHERE p.name LIKE :pattern");
        query.setParameter("pattern", "%" + pattern + "%");
        return (long) query.uniqueResult();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Product> findCustomerProducts(int customerId) {
        Query query = getSession().createQuery("SELECT p FROM Product p WHERE p.customer.id = :id ORDER BY startDate desc");
        query.setParameter("id", customerId);
        return query.list();
    }

}
