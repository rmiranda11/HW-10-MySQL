DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

item_id INTEGER(200),

product_name VARCHAR(100),

department_name VARCHAR(100),

price INTEGER(1000),

stock_quantity INTEGER(200),

PRIMARY KEY (item_id) 

);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (101,'Toothbrush','Personal Care',5,12);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (109,'Mouse Pad','Electronics',10,44);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (123,'Folding Chair','Furniture',23,20);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (144,'Football','Sports',25,6);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (156,'iPhone','Electronics',600,10);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (159,'Emoji Coffee Mug','Kitchenware',8,10);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (160,'Pillows','Furniture',16,100);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (171,'Spiderman Toy','Toys',12,40);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (178,'Pumpkin Seeds','Gardening',2,900);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES (189,'3D Printer','Electronics',400,2);










