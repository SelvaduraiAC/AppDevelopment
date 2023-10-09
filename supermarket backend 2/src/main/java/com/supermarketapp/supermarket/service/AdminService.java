package com.supermarketapp.supermarket.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarketapp.supermarket.model.Admin;
import com.supermarketapp.supermarket.repository.WorkerRepository;
import com.supermarketapp.supermarket.utils.JwtUtil;

@Service
public class AdminService {
    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public Object authAdmin(String adminName, String password) {
        String role = "ADMIN";
        Optional<Admin> admin = workerRepository.findByWorkerNameAndWorkerPasswordAndRole(adminName, password, role);

        if (!admin.isPresent())
            return null;
        
        return jwtUtil.generateToken(admin.get().getWorkerId());
    }
}
