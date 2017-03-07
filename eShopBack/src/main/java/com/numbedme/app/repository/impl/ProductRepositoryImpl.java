package com.numbedme.app.repository.impl;

import com.numbedme.app.model.Product;
import com.numbedme.app.repository.AbstractRepository;
import com.numbedme.app.repository.ProductRepository;
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

        update(product);
    }

    @Override
    public void deleteProduct(Product product) {
        delete(product);
    }

    @Override
    public void persistProduct(Product product) {
        persist(product);
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

}
