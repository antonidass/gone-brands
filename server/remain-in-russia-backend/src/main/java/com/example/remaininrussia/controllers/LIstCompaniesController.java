package com.example.remaininrussia.controllers;

import com.example.remaininrussia.entities.Company;
import com.example.remaininrussia.entities.ListCompanies;
import com.example.remaininrussia.services.ListCompaniesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class LIstCompaniesController {
    private final ListCompaniesService listCompaniesService;

    @CrossOrigin
    @GetMapping("/listCompanies/{id}")
    public ResponseEntity<?> getListCompaniesById(@PathVariable Long id) {
        ListCompanies listCompanies;
        try {
            listCompanies = listCompaniesService.getListCompanies(id);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + id + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listCompanies, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/search/listCompanies")
    public ResponseEntity<?> getListCompaniesByName(@RequestParam(value="name") String name) {
        System.out.println("HEHEHEH");
        List<ListCompanies> listCompanies;
        try {
            listCompanies = listCompaniesService.getListCompanies(name);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + name + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listCompanies, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/listCompanies")
    public ResponseEntity<?> getListCompanies() {
        List<ListCompanies> listCompanies = listCompaniesService.getListCompanies();
        return new ResponseEntity<>(listCompanies, HttpStatus.OK);
    }

    @PutMapping("/listCompanies")
    public ResponseEntity<?> updateListCompanies(@RequestBody ListCompanies listCompaniesDetails) {
        ListCompanies listCompanies;
        try {
            listCompanies = listCompaniesService.updateListCompanies(listCompaniesDetails);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + listCompaniesDetails.getId() + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listCompanies, HttpStatus.OK);
    }

    @PostMapping("/listCompanies/add")
    public ResponseEntity<?> addListCompanies(@RequestBody ListCompanies listCompanies) {
        ListCompanies listCompaniesNew = listCompaniesService.saveListCompanies(listCompanies);
        return new ResponseEntity<>(listCompaniesNew, HttpStatus.OK);
    }

    @DeleteMapping("/listCompanies/{id}")
    public ResponseEntity<?> deleteListCompanies(@PathVariable Long id) {
        try {
            listCompaniesService.deleteListCompanies(id);
        }  catch (Exception exc) {
            return new ResponseEntity<>("Компания с id = " + id + " не найдена!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Компания с id = " + id + " успешно удалена!", HttpStatus.OK);
    }
}
