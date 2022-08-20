package com.example.remaininrussia;

import com.example.remaininrussia.entities.Role;
import com.example.remaininrussia.entities.User;
import com.example.remaininrussia.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class RemainInRussiaApplication {

    public static void main(String[] args) {
        SpringApplication.run(RemainInRussiaApplication.class, args);
    }
//
//
//    @Bean
//    CommandLineRunner run(UserService userService) {
//        return args -> {
//            userService.saveRole(new Role(null, "ROLE_USER"));
//            userService.saveRole(new Role(null, "ROLE_MANAGER"));
//            userService.saveRole(new Role(null, "ROLE_ADMIN"));
//            userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));
//
//            userService.saveUser(new User(null, "Anton Ivanov", "kekes", "1234", new ArrayList< >()));
//            userService.saveUser(new User(null, "Ivan Ivanov", "jopaer", "444", new ArrayList< >()));
//            userService.saveUser(new User(null, "Petr Ivanov", "vkal", "1234", new ArrayList< >()));
//            userService.saveUser(new User(null, "Sasha Ivanov", "pirdo", "1234", new ArrayList< >()));
//
//
//            userService.addRoleToUser("kekes", "ROLE_SUPER_ADMIN");
//            userService.addRoleToUser("jopaer", "ROLE_USER");
//            userService.addRoleToUser("vkal", "ROLE_MANAGER");
//            userService.addRoleToUser("pirdo", "ROLE_ADMIN");
//            userService.addRoleToUser("pirdo", "ROLE_MANAGER");
//            userService.addRoleToUser("pirdo", "ROLE_USER");
//        };
//    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
