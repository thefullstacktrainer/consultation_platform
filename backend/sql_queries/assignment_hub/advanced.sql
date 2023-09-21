

DELIMITER $$

CREATE PROCEDURE SetCounter(
	INOUT counter INT,
    IN inc INT
)
BEGIN
	SET counter = counter + inc;
END$$

DELIMITER ;

SET @counter = 1;
CALL SetCounter(@counter,1); -- 2
CALL SetCounter(@counter,1); -- 3
CALL SetCounter(@counter,6); -- 8
SELECT @counter; -- 8 

Drop Procedure SetCounter;

-- Creating a table that contains the value
CREATE TABLE MyTable
(
  name VARCHAR(10),
  value int
);

select * from MyTable;
-- Inserting the data into the table 
INSERT into MyTable(name, value) VALUES ('ABC', 1);
INSERT into MyTable(name, value) VALUES ('DEF', 2);
INSERT into MyTable(name, value) VALUES ('GHI', 3);
INSERT into MyTable(name, value) VALUES ('JKL', 4);
INSERT into MyTable(name, value) VALUES ('MNO', 5);

INSERT into MyTable(name, value) VALUES ('MNO', 9);

-- Printing the Table
SELECT * from MyTable;

-- Creating a Function for getting average as return value from the table
DELIMITER //

CREATE FUNCTION Demoavg() RETURNS INT READS SQL DATA
BEGIN
    DECLARE result INT;
    SET result = (SELECT AVG(`value`) FROM MyTable);
    RETURN result;
END
//


DELIMITER ;
SET GLOBAL log_bin_trust_function_creators = 1;

-- Calling the function 
SELECT Demoavg();

-- Create the employees table
CREATE TABLE employees (
    employeeNumber INT PRIMARY KEY,
    lastname VARCHAR(50),
    firstname VARCHAR(50),
    hireDate DATE
);

-- Create the employees_audit table
-- Insert sample employee records
INSERT INTO employees (employeeNumber, lastname, firstname, hireDate)
VALUES
    (1, 'Sharma', 'Rajesh', '2022-01-15'),
    (2, 'Patel', 'Neha', '2021-08-10'),
    (3, 'Singh', 'Amit', '2020-12-05'),
    (4, 'Gupta', 'Priya', '2022-03-20'),
    (5, 'Mehta', 'Sanjay', '2021-06-30');


CREATE TABLE employees_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employeeNumber INT NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    changedat DATETIME DEFAULT NULL,
    action VARCHAR(50) DEFAULT NULL
);

drop trigger before_employee_update;
CREATE TRIGGER before_employee_update 
    BEFORE UPDATE ON employees
    FOR EACH ROW 
 INSERT INTO employees_audit
 SET action = 'insert',
     employeeNumber = OLD.employeeNumber,
     lastname = OLD.lastname,
     changedat = NOW();

     UPDATE employees 
SET 
    lastName = 'Test'
WHERE
    employeeNumber = 2;

select * from employees;

select * from employees_audit;

    SHOW TRIGGERS;
