package com.worker_microservice.ordermicroservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.worker_microservice.ordermicroservice.model.Product;


public interface ProductRepository extends JpaRepository<Product, String> {

    public List<Product> findAll();

    public Optional<Product> findByProductId(String productId);

    public Optional<Product> findByProductName(String productName);
    
}
