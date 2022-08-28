package com.example.remaininrussia.services;


import com.example.remaininrussia.entities.Category;
import com.example.remaininrussia.repositories.CategoryRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepo categoryRepo;

    public List<Category> getCategories()  {
        return categoryRepo.findAll();
    }
}
