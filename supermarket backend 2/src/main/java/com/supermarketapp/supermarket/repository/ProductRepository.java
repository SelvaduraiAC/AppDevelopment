package com.supermarketapp.supermarket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarketapp.supermarket.model.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

    public List<Product> findAll();

    public Optional<Product> findByProductId(String productId);
    
}
