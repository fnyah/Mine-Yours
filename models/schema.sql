DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE books (
	id INT AUTO_INCREMENT NOT NULL,
    seller varchar(100) NOT NULL,
    title varchar(100) NOT NULL,
	author varchar(100) NOT NULL,
    price int NOT NULL,
    bookcondition varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    dateposted DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE seller (
	id INT AUTO_INCREMENT NOT NULL,
    fullname varchar(50) NOT NULL,
    email varchar(100) NOT NULL,
    pword varchar(50) NOT NULL,
    PRIMARY KEY (id)
);