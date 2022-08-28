package com.example.remaininrussia.entities;


import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table
@Data
public class Category {
    public Category () {}

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "name")
    private String name;
}
