package com.example.remaininrussia.services;


import com.example.remaininrussia.entities.Role;
import com.example.remaininrussia.entities.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
}
