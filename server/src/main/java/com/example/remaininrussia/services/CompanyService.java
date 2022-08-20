package com.example.remaininrussia.services;

import com.example.remaininrussia.entities.Company;
import com.example.remaininrussia.repositories.CompanyRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CompanyService {
    private final CompanyRepo companyRepo;

    public Company getCompanyById(Long id) throws Exception {
        return companyRepo.findById(id).orElseThrow(Exception::new);
    }

    public Company saveCompany(Company company) {
        return companyRepo.save(company);
    }

    public Company updateCompany(Company companyDetails) throws Exception {
        Company company = companyRepo.findById(companyDetails.getId()).orElseThrow(Exception::new);

        company.setCountryCode(companyDetails.getCountryCode());
        company.setCountryName(companyDetails.getCountryName());
        company.setDescription(companyDetails.getDescription());
        company.setList(companyDetails.getList());
        company.setName(companyDetails.getName());
        company.setImageUrl(companyDetails.getImageUrl());
        company.setSector(companyDetails.getSector());
        company.setSiteUrl(companyDetails.getSiteUrl());

        return companyRepo.save(company);
    }

    public void deleteCompany(Long id) throws Exception {
        Company company = companyRepo.findById(id).orElseThrow(Exception::new);
        companyRepo.delete(company);
    }
}
