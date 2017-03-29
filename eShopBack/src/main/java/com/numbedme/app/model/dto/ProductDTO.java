package com.numbedme.app.model.dto;

import com.numbedme.app.model.entity.Product;

import java.io.Serializable;
import java.util.List;

/**
 * Created by numbed on 3/28/17.
 */
public class ProductDTO implements Serializable {
    private int pages;
    private List<Product> products;

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
