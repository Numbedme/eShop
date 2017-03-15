package com.numbedme.app.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by User on 06.03.2017.
 */

@Entity
@Table(name = "customer_order")
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Customer customer;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<LineItem> items;

    private Date orderDate;

    private Double totalPrice;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Order() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }


    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<LineItem> getProducts() {
        return items;
    }

    public void setProducts(List<LineItem> products) {
        this.items = products;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        if (getId() != order.getId()) return false;
        if (getOrderDate() != null ? !getOrderDate().equals(order.getOrderDate()) : order.getOrderDate() != null)
            return false;
        if (getCustomer() != null ? !getCustomer().equals(order.getCustomer()) : order.getCustomer() != null)
            return false;
        if (getProducts() != null ? !getProducts().equals(order.getProducts()) : order.getProducts() != null)
            return false;
        return getTotalPrice() != null ? getTotalPrice().equals(order.getTotalPrice()) : order.getTotalPrice() == null;

    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getOrderDate() != null ? getOrderDate().hashCode() : 0);
        result = 31 * result + (getCustomer() != null ? getCustomer().hashCode() : 0);
        result = 31 * result + (getProducts() != null ? getProducts().hashCode() : 0);
        result = 31 * result + (getTotalPrice() != null ? getTotalPrice().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", orderDate=" + orderDate +
                ", customer=" + customer +
                ", products=" + items +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
