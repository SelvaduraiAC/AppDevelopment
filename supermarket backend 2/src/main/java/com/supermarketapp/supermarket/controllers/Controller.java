package com.supermarketapp.supermarket.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.supermarketapp.supermarket.model.AdminLogin;
import com.supermarketapp.supermarket.model.OrderDetails;
import com.supermarketapp.supermarket.model.User;
import com.supermarketapp.supermarket.model.Worker;
import com.supermarketapp.supermarket.service.AdminService;
import com.supermarketapp.supermarket.service.OrderDetailsService;
import com.supermarketapp.supermarket.service.UserService;
import com.supermarketapp.supermarket.service.WorkerService;
import com.supermarketapp.supermarket.utils.JwtUtil;

import io.jsonwebtoken.Claims;

@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {

    @Autowired
    private UserService userService;

    @Autowired
    private WorkerService workerService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private OrderDetailsService orderDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping(value = "/login", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> loginWorker(final @RequestBody Worker worker) {
        return ResponseEntity.status(HttpStatus.OK).body(workerService.getWorkerByEmail(worker.getWorkerEmail(), worker.getWorkerPassword()));
    }

    @PostMapping(value = "/admin", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Object> loginAdmin(final @RequestBody AdminLogin admin) {
        return ResponseEntity.status(HttpStatus.OK).body(adminService.authAdmin(admin.getAdminName(), admin.getAdminPassword()));
    }

    @GetMapping(value = "/products")
    public ResponseEntity<Object> getProducts(@RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        return ResponseEntity.status(HttpStatus.OK).body((claims == null) ? "Access denied" : claims);
    }

    @GetMapping(value = "/workers")
    public ResponseEntity<Object> getWorkers(@RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        Worker worker = workerService.getById(claims.getIssuer());
        return ResponseEntity.status(HttpStatus.OK)
                .body((claims != null && worker.getRole().equals("ADMIN")) ? workerService.getAll() : "Access denied");
    }
    
    @GetMapping(value = "/worker")
    public ResponseEntity<Object> getWorker(@RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        return ResponseEntity.status(HttpStatus.OK).body((claims != null) ? workerService.getById(claims.getIssuer()) : "Access denied");
    }

    @PostMapping(value = "/workers")
    public ResponseEntity<Object> addWorkers(@RequestBody Worker worker) {
        Boolean isWorkerAdded = workerService.saveWorker(worker);
        String response = isWorkerAdded ? "worker added successfully" : "Oops...something went wrong";

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    
    @PutMapping(value = "/workers")
    public ResponseEntity<Object> updateWorkers(@RequestBody Worker worker) {
        Boolean isWorkerAdded = workerService.updateWorker(worker);
        String response = isWorkerAdded ? "worker data updated successfully" : "Oops...something went wrong";

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    
    @DeleteMapping(value = "/workers")
    public ResponseEntity<Object> deleteWorkers(@RequestParam String workerId) throws Exception {
        Boolean isWorkerAdded = workerService.deleteWorker(workerId);
        String response = isWorkerAdded ? "worker deleted successfully" : "Oops...something went wrong";

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    
    @PostMapping(value = "/orders")
    public ResponseEntity<Object> addOrders(@RequestBody OrderDetails orderDetails) {

        Boolean isOrderAdded = orderDetailsService.addOrder(orderDetails);
        String response = isOrderAdded ? "order added successfully" : "Oops...something went wrong";

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping(value = "/orders")
    public ResponseEntity<Object> getOrders(@RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        return ResponseEntity.status(HttpStatus.OK).body(claims != null ? orderDetailsService.getAll() : "Access denied");
    }

    @GetMapping(value = "/orders/{orderId}")
    public ResponseEntity<Object> getOrderById(@PathVariable String orderId, @RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        return ResponseEntity.status(HttpStatus.OK).body(claims != null ? orderDetailsService.getById(orderId) : "Access denied");
    }

    @GetMapping(value = "/users")
    public ResponseEntity<Object> getUsers(@RequestHeader(value = "Authorization", defaultValue = "") String auth) {
        Claims claims = jwtUtil.verify(auth);
        return ResponseEntity.status(HttpStatus.OK).body(claims != null ? userService.getAll() : "Access denied");
    }

    @GetMapping(value = "/users/{userId}")
    public ResponseEntity<Object> getUserById(@RequestHeader(value = "Authorization", defaultValue = "") String auth, @PathVariable String userId) {
        Claims claims = jwtUtil.verify(auth);
        User user = userService.getById(userId);
        return ResponseEntity.status(HttpStatus.OK).body(claims != null ? (user != null ? orderDetailsService.getByUser(user) : "No user found") : "Access denied");
    }

}
