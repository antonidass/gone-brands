package com.example.remaininrussia.repositories;

import com.example.remaininrussia.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
