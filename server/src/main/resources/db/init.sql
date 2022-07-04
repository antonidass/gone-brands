CREATE TABLE IF NOT EXISTS main.status (
    id serial  primary key,
    name char(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS main.company (
    id bigint primary key,
    name char(30) NOT NULL,
    country char(30),
    sector char(30),
    description char(30),
    image_url varchar,
    site_url varchar
);

CREATE SEQUENCE IF NOT EXISTS main.company_serial START 1;

CREATE TABLE IF NOT EXISTS main.list (
    id bigint primary key,
    company bigint,
    status int,
    date_left timestamp,
    date_back timestamp,
    news_url varchar,
    FOREIGN KEY (company) REFERENCES main.company(id),
    FOREIGN KEY (status) REFERENCES main.status(id)
);

CREATE SEQUENCE IF NOT EXISTS main.list_serial START 1;

DROP TABLE IF EXISTS main.list;
DROP TABLE IF EXISTS main.status;
DROP TABLE IF EXISTS main.company;


