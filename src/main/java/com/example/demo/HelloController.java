package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        System.out.println("asdasd");
        return "{\"name\":\"John\", \"age\":30}";
    }
}
