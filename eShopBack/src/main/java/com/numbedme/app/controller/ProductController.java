package com.numbedme.app.controller;

import com.numbedme.app.model.Product;
import com.numbedme.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 17.02.2017.
 */

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getProducts(@RequestParam(value = "name", required = false) String pattern) {
        if (pattern != null) {
            return service.findByPattern(pattern);
        } else {
            return service.findAllProducts();
        }
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Product getProduct(@PathVariable("id") int id) {
        return service.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void postProduct(@RequestBody() Product product) {
        service.persistProduct(product);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void putProduct(@RequestBody() Product product, @PathVariable("id") String id) {
        if (id.equals(product.getId())) {
            service.updateProduct(product);
        }
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") int id) {
        service.deleteProduct(service.findById(id));
    }
}
