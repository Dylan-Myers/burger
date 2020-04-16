DROP TABLE IF EXISTS burgersdb

Create Database burgersdb
use burgersdb

create table burgers (
    id int NOT NULL AUTO_INCREMENT,
    burgertype varchar(60) not null,
    eaten BOOL DEFAULT false,
    PRIMARY KEY (ID)
);


CREATE TABLE   customers (
    id INT NOT NULL AUTO_INCREMENT,
    customer VARCHAR(255) NOT NULL,
    eaten BOOL DEFAULT false,
    PRIMARY KEY (ID)

);
