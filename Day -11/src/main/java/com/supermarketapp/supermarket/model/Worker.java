package com.supermarketapp.supermarket.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Worker {
    @GeneratedValue(strategy = GenerationType.UUID)
    private String workerId;

    private String workerName;
    private String workerPassword;
    private String workerEmail;
    private long workerContact;
    private long workerSalary;
}
