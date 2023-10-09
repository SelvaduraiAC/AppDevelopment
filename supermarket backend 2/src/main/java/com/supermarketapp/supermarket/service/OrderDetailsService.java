package com.supermarketapp.supermarket.service;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarketapp.supermarket.model.OrderDetails;
import com.supermarketapp.supermarket.model.User;
import com.supermarketapp.supermarket.model.orderInterface;
import com.supermarketapp.supermarket.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {
    
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @Autowired
    private UserService userService;

    public Iterable<OrderDetails> getAll() {
        return orderDetailsRepository.findAll();
    }

    public OrderDetails getById(String orderId) {
        Optional<OrderDetails> order = orderDetailsRepository.findById(orderId);

        if (!order.isPresent())
            return null;

        return order.get();
    }

    public Boolean addOrder(OrderDetails orderDetails) {
        User userDetails = orderDetails.getUser();
        User user = userService.getExistingUser(userDetails.getUserName(), userDetails.getUserContact());

        if (user != null)
            orderDetails.setUser(user);

        return orderDetailsRepository.save(orderDetails) != null ? true : false;
    }

    public List<orderInterface> getByUser(User user) {
        return orderDetailsRepository.findByUser(user);
    }

}
