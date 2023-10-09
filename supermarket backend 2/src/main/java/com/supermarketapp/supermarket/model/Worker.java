package com.supermarketapp.supermarket.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String workerId;

    private String workerName;
    private String workerPassword;
    private String workerEmail;
    private Character workerGender;
    private Long workerContact;
    private Long workerSalary;
    private Boolean isWorkerInDuty;
    private String workerTime;
    private String role;
}
