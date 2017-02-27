package com.numbedme.app.controller;

import com.numbedme.app.model.Product;
import com.numbedme.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by User on 17.02.2017.
 */

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService service;

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getProducts() {
        return service.findAllProducts();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void postProduct(@RequestBody() Product product){
        System.out.println(product);
        service.persistProduct(product);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") int id){
        service.deleteProduct(service.findById(id));
    }
}
