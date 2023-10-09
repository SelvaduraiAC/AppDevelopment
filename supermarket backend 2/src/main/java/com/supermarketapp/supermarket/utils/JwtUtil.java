package com.supermarketapp.supermarket.utils;

import java.sql.Date;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

    // @Value("${application.jwt.secret-key}")
    private static String secretKey = "VCCjuIfD65MtvNthatDQCmfFtpqdgRb9GIXhoQlPBB7qzeAXZcDJw1MeZ480fqe";

    // private static long expiryDuration = 60 * 60 * 1000;

    public String generateToken(String id) {

        long issueTime = System.currentTimeMillis();
        // long expiryTime = issueTime + (expiryDuration * 24);

        Date issueDate = new Date(issueTime);
        // Date expiryDate = new Date(expiryTime);

        // claims
        Claims claims = Jwts.claims()
                .setIssuer(id)
                .setIssuedAt(issueDate);
                // .setExpiration(expiryDate);

        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public Claims verify(String auth) {

        try {
            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(auth).getBody();
        } catch (Exception e) {
            return null;
        }

    }
}
