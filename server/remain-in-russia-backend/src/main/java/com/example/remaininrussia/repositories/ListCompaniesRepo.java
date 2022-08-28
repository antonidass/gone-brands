package com.example.remaininrussia.repositories;

import com.example.remaininrussia.entities.ListCompanies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ListCompaniesRepo extends JpaRepository<ListCompanies, Long> {

    List<ListCompanies> getListCompaniesByCompanyNameContainsIgnoreCase(String name);
}
