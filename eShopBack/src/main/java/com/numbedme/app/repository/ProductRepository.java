package com.numbedme.app.repository;

import com.numbedme.app.model.entity.Product;

import java.util.List;

/**
 * Created by User on 15.02.2017.
 */
public interface ProductRepository {
    Product findById(int id);

    void updateProduct(Product product);

    void deleteProduct(Product product);

    void persistProduct(Product product);

    List<Product> findAllProducts();

    List<Product> findByPattern(String pattern);

    List<Product> findProductsOnPageByPattern(String pattern, Integer page, Integer amount);

    long amountOfProducts(String pattern);

    List<Product> findCustomerProducts(int customerId);
}
