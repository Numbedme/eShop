package com.numbedme.app.controller;

import com.numbedme.app.model.dto.ProductDTO;
import com.numbedme.app.model.entity.Product;
import com.numbedme.app.service.CustomerService;
import com.numbedme.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 17.02.2017.
 */

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @Autowired
    private CustomerService customerService;

    @RequestMapping(method = RequestMethod.GET, value = "/all")
    public List<Product> getProducts(@RequestParam(value = "name", required = false) String pattern) {
        if (pattern != null) {
            return service.findByPattern(pattern);
        } else {
            return service.findAllProducts();
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public ProductDTO getProductPage(@RequestParam(value = "name", required = false, defaultValue = "") String pattern,
                                        @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
                                        @RequestParam(value = "amount", required = false, defaultValue = "10") Integer amount,
                                        @RequestParam(value = "cusId", required = false, defaultValue = "") String cusId){
        List<Product> list = service.findProductsOnPageByPattern(pattern, page, amount, cusId);
        long products = service.amountOfProducts(pattern);
        ProductDTO dto = new ProductDTO();
        dto.setPages((int)Math.ceil(products/(float)amount));
        dto.setProducts(list);
        return dto;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/customer/{id}")
    public List<Product> getProductsOfCustomer(@PathVariable("id") int id){
        return service.findCustomerProducts(id);
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
        if (id.equals(product.getId().toString())) {
            service.updateProduct(product);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") int id) {
        service.deleteProduct(service.findById(id));
    }
}
