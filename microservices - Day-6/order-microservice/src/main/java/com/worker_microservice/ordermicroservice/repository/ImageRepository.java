package com.worker_microservice.ordermicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.worker_microservice.ordermicroservice.model.Image;
import java.util.Optional;


public interface ImageRepository extends JpaRepository<Image, String> {

    public Optional<Image> findByName(String name);
    
}
