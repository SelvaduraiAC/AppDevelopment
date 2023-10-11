package com.worker_microservice.ordermicroservice.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.worker_microservice.ordermicroservice.service.ImageService;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping("{fileName}")
    public ResponseEntity<?> get(@PathVariable String fileName) throws IOException {
        byte[] image = imageService.getImage(fileName);

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }    
}
