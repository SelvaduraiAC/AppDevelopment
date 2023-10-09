package com.supermarketapp.supermarket.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarketapp.supermarket.model.Product;
import com.supermarketapp.supermarket.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> getAll() {
        return productRepository.findAll();
    }

    public Object getById(String productId) {
        Optional<Product> product = productRepository.findById(productId);

        if (!product.isPresent())
            return "No product found";

        return product.get();
    }
}
