use student;

show tables;

-- Insert data into the Course table
INSERT INTO Course (course_id, course_name) VALUES
(1, 'Software Engineering'),
(2, 'Web Development'),
(3, 'Data Science'),
(4, 'Mobile App Development'),
(5, 'Database Management');

select * from course;

-- Insert data into the Student table
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin, course_id) VALUES
(1, 'Rahul Sharma', '1995-03-15', '123A', 'Main Street', 'Mumbai', 'Maharashtra', 400001, 1),
(2, 'Priya Patel', '1998-07-20', '45B', 'Park Avenue', 'Delhi', 'Delhi', 110001, 2),
(3, 'Amit Singh', '1997-05-10', '789C', 'Lake Road', 'Bangalore', 'Karnataka', 560001, 1),
(4, 'Kavita Reddy', '1996-11-28', '234D', 'Hill View', 'Hyderabad', 'Telangana', 500001, 3),
(5, 'Sandeep Kumar', '1999-02-03', '67E', 'Garden Street', 'Chennai', 'Tamil Nadu', 600001, 4),
(6, 'Anjali Desai', '1997-08-12', '12F', 'River Road', 'Kolkata', 'West Bengal', 700001, 2),
(7, 'Rajesh Verma', '1994-04-25', '890G', 'Sunset Avenue', 'Pune', 'Maharashtra', 411001, 1),
(8, 'Preeti Gupta', '1998-12-08', '78H', 'Meadow Lane', 'Jaipur', 'Rajasthan', 302001, 5),
(9, 'Alok Khanna', '1996-09-17', '345I', 'Forest Road', 'Ahmedabad', 'Gujarat', 380001, 3),
(10, 'Sarika Pandey', '1999-06-30', '56J', 'Mountain View', 'Lucknow', 'Uttar Pradesh', 226001, 2);


select * from student;


-- Insert data into the Lecturer table
INSERT INTO Lecturer (lecturer_id, lecturer_name, course_id) VALUES
(1, 'Dr. Manoj Kapoor', 1),
(2, 'Prof. Nisha Sharma', 2),
(3, 'Dr. Rajesh Verma', 3),
(4, 'Prof. Deepak Singh', 4),
(5, 'Dr. Meena Gupta', 5);

select * from Lecturer;

-- Insert data into the Subject table
INSERT INTO Subject (subject_id, subject_name, lecturer_id) VALUES
(1, 'Software Development Fundamentals', 1),
(2, 'Web Design and Development', 2),
(3, 'Data Analysis with Python', 3),
(4, 'Mobile App UI Design', 4),
(5, 'Database Systems', 5);


select * from Subject;


-- Insert data into the Stud_Hobby table
INSERT INTO Stud_Hobby (student_id, hobby) VALUES
(1, 'Cricket'),
(2, 'Painting'),
(3, 'Photography'),
(4, 'Reading'),
(5, 'Cooking'),
(6, 'Dancing'),
(7, 'Swimming'),
(8, 'Chess'),
(9, 'Travelling'),
(10, 'Music');

select * from Stud_Hobby;


-- Check the data in the tables
SELECT * FROM Course;
SELECT * FROM Student;
SELECT * FROM Lecturer;
SELECT * FROM Subject;
SELECT * FROM Stud_Hobby;