package com.example.remaininrussia.controllers;

import com.example.remaininrussia.entities.Company;
import com.example.remaininrussia.services.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class CompanyController {
    private final CompanyService companyService;

    @GetMapping("/company/{id}")
    public ResponseEntity<?> getCompanyById(@PathVariable Long id) {
        Company company;
        try {
            company = companyService.getCompanyById(id);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + id + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PutMapping("/company")
    public ResponseEntity<?> updateCompany(@RequestBody Company companyDetails) {
        Company company;
        try {
            company = companyService.updateCompany(companyDetails);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + companyDetails.getId() + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @PostMapping("/company/add")
    public ResponseEntity<?> addCompany(@RequestBody Company company) {
        Company companyNew = companyService.saveCompany(company);
        return new ResponseEntity<>(companyNew, HttpStatus.OK);
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<?> deleteCompany(@PathVariable Long id) {
        try {
            companyService.deleteCompany(id);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + id + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Компания с id = " + id + " успешно удалена!", HttpStatus.OK);
    }
}
