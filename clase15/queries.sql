-- Listar bases de datos

SHOW DATABASES;

-- Usar una base de datos

USE ecommerce;

-- Listar tablas

SHOW TABLES;

-- Detalle de una tabla

DESCRIBE productos;

-- Crear tabla de productos

CREATE TABLE productos (
   id INT NOT NULL AUTO_INCREMENT,
   name CHAR(30),
   price FLOAT,
   description VARCHAR(255),
   stock INT,
   PRIMARY KEY (id)
);

-- Crear tabla de categorias

CREATE TABLE categorias (
   id INT NOT NULL AUTO_INCREMENT,
   name CHAR(30),
   description VARCHAR(255),
   PRIMARY KEY (id)
);

-- Modificar tabla de productos y agregar llave foranea a categorias

ALTER TABLE productos
ADD COLUMN categoria_id INT NULL,
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);

-- Insertar productos

INSERT INTO productos (name, price, description, stock) VALUES ('Coca Cola', 10.50, 'Refresco', 100);
INSERT INTO productos (name, price, description, stock) VALUES ('Agua mineral', 8.22, 'Agua gasificada', 50);
INSERT INTO productos (name, price, description, stock) VALUES ('Marias', 6, 'Snack', 80);

-- Listar registros

SELECT * FROM productos;

-- Insertar categorias en una sola sentencia

INSERT INTO categorias (name) VALUES ('Bebidas'), ('Snacks');

-- Actualizar registros

UPDATE productos SET categoria_id=1 WHERE id IN (1, 2);
UPDATE productos SET categoria_id=2 WHERE name = 'Marias';

-- BORRAR REGISTROS

DELETE FROM productos WHERE id = 2;


