package com.example.remaininrussia.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "list")
@Data
public class ListCompanies {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "date_left")
    private Timestamp dateLeft;

    @Column(name = "date_back")
    private Timestamp dateBack;

    @Column(name = "news_url")
    private String newsUrl;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company", referencedColumnName = "id")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "status")
    private Status status;

}
