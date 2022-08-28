package com.example.remaininrussia.services;

import com.example.remaininrussia.entities.Company;
import com.example.remaininrussia.entities.ListCompanies;
import com.example.remaininrussia.repositories.ListCompaniesRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ListCompaniesService {
    public final ListCompaniesRepo listCompaniesRepo;

    public ListCompanies getListCompanies(Long id) throws Exception {
        return listCompaniesRepo.findById(id).orElseThrow(Exception::new);
    }

    public List<ListCompanies> getListCompanies(String name) throws Exception {
        return listCompaniesRepo.getListCompaniesByCompanyNameContainsIgnoreCase(name);
    }

    public List<ListCompanies> getListCompanies() {
        return listCompaniesRepo.findAll();
    }

    public ListCompanies saveListCompanies(ListCompanies listCompanies) {
        return listCompaniesRepo.save(listCompanies);
    }

    public ListCompanies updateListCompanies(ListCompanies listCompaniesDetails) throws Exception {
        ListCompanies listCompanies = listCompaniesRepo.findById(listCompaniesDetails.getId()).orElseThrow(Exception::new);
        listCompanies.setDateBack(listCompaniesDetails.getDateBack());
        listCompanies.setDateLeft(listCompaniesDetails.getDateLeft());
        listCompanies.setNewsUrl(listCompaniesDetails.getNewsUrl());
        listCompanies.setCompany(listCompaniesDetails.getCompany());
        listCompanies.setStatus(listCompaniesDetails.getStatus());
        listCompanies.setComment(listCompaniesDetails.getComment());

        return listCompaniesRepo.save(listCompanies);
    }

    public void deleteListCompanies(Long id) throws Exception {
        ListCompanies listCompanies = listCompaniesRepo.findById(id).orElseThrow(Exception::new);
        listCompaniesRepo.delete(listCompanies);
    }
}
