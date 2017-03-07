package com.numbedme.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
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

    @ManyToMany
    private List<Order> orders;

    public Customer() {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Customer customer = (Customer) o;

        if (id != customer.id) return false;
        if (picture != null ? !picture.equals(customer.picture) : customer.picture != null) return false;
        if (login != null ? !login.equals(customer.login) : customer.login != null) return false;
        if (password != null ? !password.equals(customer.password) : customer.password != null) return false;
        return orders != null ? orders.equals(customer.orders) : customer.orders == null;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (picture != null ? picture.hashCode() : 0);
        result = 31 * result + (login != null ? login.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (orders != null ? orders.hashCode() : 0);
        return result;
    }
}
