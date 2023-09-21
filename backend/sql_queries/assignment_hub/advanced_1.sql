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

