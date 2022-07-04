package com.example.remaininrussia.entities;


import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "company")
@Data
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "country")
    private String country;

    @Column(name = "sector")
    private String sector;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "site_url")
    private String siteUrl;

    @OneToOne(mappedBy = "company")
    private ListCompanies list;
}
