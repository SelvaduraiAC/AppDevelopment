package com.supermarketapp.supermarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarketapp.supermarket.model.OrderDetails;
import com.supermarketapp.supermarket.model.User;
import com.supermarketapp.supermarket.model.orderInterface;

import java.util.List;
import java.util.Optional;


public interface OrderDetailsRepository extends JpaRepository<OrderDetails, String> {

    public List<OrderDetails> findAll();
    
    public Optional<OrderDetails> findByOrderId(String orderId);

    public List<orderInterface> findByUser(User user);

}
