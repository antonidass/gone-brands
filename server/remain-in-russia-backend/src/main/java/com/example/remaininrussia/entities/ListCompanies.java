package com.example.remaininrussia.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "list")
@Data
public class ListCompanies {
    public ListCompanies () {}

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "date_left")
    private Date dateLeft;

    @Column(name = "date_back")
    private Date dateBack;

    @Column(name = "news_url")
    private String newsUrl;

    @Column(name = "comment")
    private String comment;

    @Column(name = "status")
    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    private Company company;



}
