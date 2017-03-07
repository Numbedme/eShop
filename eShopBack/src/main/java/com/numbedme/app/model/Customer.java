package com.numbedme.app.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by User on 06.03.2017.
 */
@Entity
public class Customer {

    @Id
    private int id;

    @Lob
    private String picture;

    private String login;

    private String password;

    private String email;

    @ManyToMany
    private List<Order> orders;

    @OneToMany
    private List<Product> products;

    public Customer() {
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Customer customer = (Customer) o;

        if (getId() != customer.getId()) return false;
        if (getPicture() != null ? !getPicture().equals(customer.getPicture()) : customer.getPicture() != null)
            return false;
        if (getLogin() != null ? !getLogin().equals(customer.getLogin()) : customer.getLogin() != null) return false;
        if (getPassword() != null ? !getPassword().equals(customer.getPassword()) : customer.getPassword() != null)
            return false;
        if (getEmail() != null ? !getEmail().equals(customer.getEmail()) : customer.getEmail() != null) return false;
        if (getOrders() != null ? !getOrders().equals(customer.getOrders()) : customer.getOrders() != null)
            return false;
        return getProducts() != null ? getProducts().equals(customer.getProducts()) : customer.getProducts() == null;

    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getPicture() != null ? getPicture().hashCode() : 0);
        result = 31 * result + (getLogin() != null ? getLogin().hashCode() : 0);
        result = 31 * result + (getPassword() != null ? getPassword().hashCode() : 0);
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getOrders() != null ? getOrders().hashCode() : 0);
        result = 31 * result + (getProducts() != null ? getProducts().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", picture='" + picture + '\'' +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", orders=" + orders +
                ", products=" + products +
                '}';
    }
}
