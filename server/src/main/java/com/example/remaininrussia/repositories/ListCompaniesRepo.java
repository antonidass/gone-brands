package com.example.remaininrussia.repositories;

import com.example.remaininrussia.entities.ListCompanies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ListCompaniesRepo extends JpaRepository<ListCompanies, Long> {
}
