DROP DATABASE IF EXISTS baroverview
create DATABASE baroverview;

use baroverview;

CREATE TABLE Menu (
id INT NOT NULL AUTO_INCREMENT,
drink_name VARCHAR(255),
price DECIMAL(10,2),
description VARCHAR(255),
ingredients VARCHAR(255),
category VARCHAR(255),
images VARCHAR(255),
PRIMARY KEY(id)
)
    
DROP TABLE Menu
SELECT * FROM Menu
