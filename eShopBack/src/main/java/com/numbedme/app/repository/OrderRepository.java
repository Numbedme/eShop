package com.numbedme.app.repository;

import com.numbedme.app.model.Order;

import java.util.List;

/**
 * Created by User on 06.03.2017.
 */
public interface OrderRepository {

    Order findById(int id);

    void updateOrder(Order order);

    void deleteOrder(Order order);

    void persistOrder(Order order);

    List<Order> findAllOrders();
}
