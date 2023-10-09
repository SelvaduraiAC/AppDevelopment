package com.supermarketapp.supermarket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarketapp.supermarket.model.User;


public interface UserRepository extends JpaRepository<User, String> {

    public List<User> findAll();

    public Optional<User> findByUserId(String userId);

    public Optional<User> findByUserNameAndUserContact(String userName, Long userContact);

}
