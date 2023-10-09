package com.supermarketapp.supermarket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarketapp.supermarket.model.Admin;
import com.supermarketapp.supermarket.model.Worker;

public interface WorkerRepository extends JpaRepository<Worker, String> {

    public List<Worker> findByRole(String role);

    public Optional<Worker> findByWorkerId(String workerId);

    public Optional<Worker> findByWorkerEmail(String workerEmail);

    public Optional<Admin> findByWorkerNameAndWorkerPasswordAndRole(String workerName, String workerPassword, String role);
}
