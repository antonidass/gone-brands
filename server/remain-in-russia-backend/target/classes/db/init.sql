CREATE TABLE IF NOT EXISTS company (
    id bigint primary key,
    name varchar NOT NULL,
    country_name varchar,
    country_code varchar,
    sector varchar,
    description varchar,
    image_url varchar,
    site_url varchar
);


CREATE TABLE IF NOT EXISTS list (
    id bigint primary key,
    company_id bigint,
    status varchar,
    comment varchar,
    date_left date,
    date_back date,
    news_url varchar,
    FOREIGN KEY (company_id) REFERENCES company(id)
);

CREATE TABLE IF NOT EXISTS category (
    id bigint primary key,
    name varchar
);

CREATE SEQUENCE IF NOT EXISTS list_serial START 1;
CREATE SEQUENCE IF NOT EXISTS company_serial START 1;
CREATE SEQUENCE IF NOT EXISTS category_serial START 1;

create schema main;

DROP TABLE IF EXISTS list;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS category;
DROp SEQUENCE company_serial;
drop sequence list_serial;
DROp SEQUENCE category_serial;
DROP schema main;

truncate main.company cascade
truncate main.list;
