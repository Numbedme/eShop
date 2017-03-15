package com.numbedme.app.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by User on 13.03.2017.
 */

@Entity
public class LineItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int quantity;

    @OneToOne
    private Product product;

    @ManyToOne
    private Customer customer;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LineItem lineItem = (LineItem) o;

        if (getId() != lineItem.getId()) return false;
        if (getQuantity() != lineItem.getQuantity()) return false;
        return getProduct() != null ? getProduct().equals(lineItem.getProduct()) : lineItem.getProduct() == null;

    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getQuantity();
        result = 31 * result + (getProduct() != null ? getProduct().hashCode() : 0);
        return result;
    }
}
