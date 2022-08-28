package com.example.remaininrussia.controllers;


import com.example.remaininrussia.entities.Category;
import com.example.remaininrussia.entities.ListCompanies;
import com.example.remaininrussia.services.CategoryService;
import com.example.remaininrussia.services.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;


    @CrossOrigin
    @GetMapping("/categories")
    public ResponseEntity<?> getCategories() {
        List<Category> categories;
        try {
            categories = categoryService.getCategories();
        }  catch (Exception exc) {
            return new ResponseEntity<>("Категории с id = " +   " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
