package com.numbedme.app.service;

import com.numbedme.app.model.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by User on 15.02.2017.
 */

@Service
public interface ProductService {
    Product findById(int id);

    void updateProduct(Product product);

    void deleteProduct(Product product);

    void persistProduct(Product product);

    List<Product> findAllProducts();

    List<Product> findByPattern(String pattern);

    List<Product> findCustomerProducts(int byId);

    List<Product> findProductsOnPageByPattern(String pattern, Integer page, Integer amount, String cusId);

    long amountOfProducts(String pattern);
}