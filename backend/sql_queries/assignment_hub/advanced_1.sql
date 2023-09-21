use assignment_hub;


-- employees -- 10
SELECT last_name, salary, department_id
 FROM employees outer
 WHERE salary >
                (SELECT AVG(salary)
                 FROM employees);

-- 4 dept
-- 1 - 2 - 10000
-- 2- 1 - 30000
-- 3- 1 - 35000
-- 4- 2 - 15000
-- 5- 1 - 50000
-- 6- 2 - 10000


SELECT last_name, salary, department_id
 FROM employees outer
 WHERE salary >
                (SELECT AVG(salary)
                 FROM employees                  
                 WHERE department_id = outer.department_id 
                 group by department_id);


CREATE TABLE buildings (
    building_no INT PRIMARY KEY AUTO_INCREMENT,
    building_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE rooms (
    room_no INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(255) NOT NULL,
    building_no INT NOT NULL,
    FOREIGN KEY (building_no)
        REFERENCES buildings (building_no)
        ON DELETE CASCADE
);

select * from buildings;
select * from rooms;

INSERT INTO buildings(building_name,address)
VALUES('ACME Headquaters','3950 North 1st Street CA 95134'),
      ('ACME Sales','5000 North 1st Street CA 95134');

      INSERT INTO rooms(room_name,building_no)
VALUES('Amazon',1),
      ('War Room',1),
      ('Office of CEO',1),
      ('Marketing',2),
      ('Showroom',2);

      DELETE FROM buildings 
WHERE building_no = 2;

select assignment_id,title from Assignments;


Drop Procedure GetAssignments;
DELIMITER $$
CREATE PROCEDURE GetAssignments(IN countryName VARCHAR(255))
BEGIN
	UPDATE Assignments
    SEt title= "Update by Procedure"
    where assignment_id = 1;
END$$


CREATE PROCEDURE UpdateAssignments(IN newTitle VARCHAR(255))
BEGIN
	UPDATE Assignments
    SEt title= newTitle
    where assignment_id = 1;
END$$
DELIMITER ;

Call UpdateAssignments("Hello");