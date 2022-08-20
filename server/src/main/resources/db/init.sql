CREATE TABLE IF NOT EXISTS main.company (
    id bigint primary key,
    name varchar NOT NULL,
    country_name varchar,
    country_code varchar,
    sector varchar,
    description varchar,
    image_url varchar,
    site_url varchar
);


CREATE TABLE IF NOT EXISTS main.list (
    id bigint primary key,
    company_id bigint,
    status varchar,
    comment varchar,
    date_left date,
    date_back date,
    news_url varchar,
    FOREIGN KEY (company_id) REFERENCES main.company(id)
);

CREATE SEQUENCE IF NOT EXISTS main.list_serial START 1;
CREATE SEQUENCE IF NOT EXISTS main.company_serial START 1;

DROP TABLE IF EXISTS main.list;
DROP TABLE IF EXISTS main.company;
DROp SEQUENCE main.company_serial;
drop sequence main.list_serial;

truncate main.company cascade
truncate main.list;
