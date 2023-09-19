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



-- Insert 20 more students into the Student table
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin, course_id) VALUES
(11, 'Neha Kapoor', '1996-09-22', '567K', 'Sunrise Road', 'Mumbai', 'Maharashtra', 400002, 2),
(12, 'Vikram Mehta', '1997-04-18', '89L', 'Green Avenue', 'Delhi', 'Delhi', 110002, 3),
(13, 'Mira Choudhury', '1998-03-05', '345M', 'Lake View', 'Bangalore', 'Karnataka', 560002, 4),
(14, 'Ankit Rajput', '1999-01-12', '123N', 'River Bank', 'Hyderabad', 'Telangana', 500002, 5),
(15, 'Sonia Joshi', '1996-07-28', '78O', 'Palm Street', 'Chennai', 'Tamil Nadu', 600002, 1),
(16, 'Rahul Verma', '1997-11-15', '234P', 'Rose Lane', 'Kolkata', 'West Bengal', 700002, 2),
(17, 'Pooja Sharma', '1995-02-27', '678Q', 'Forest View', 'Pune', 'Maharashtra', 411002, 3),
(18, 'Amit Mehta', '1998-06-14', '90R', 'Hillside Road', 'Jaipur', 'Rajasthan', 302002, 4),
(19, 'Monika Khanna', '1999-08-03', '12S', 'Skyline Avenue', 'Ahmedabad', 'Gujarat', 380002, 5),
(20, 'Rajesh Singh', '1997-12-20', '56T', 'Mountain Road', 'Lucknow', 'Uttar Pradesh', 226002, 1),
(21, 'Priyanka Reddy', '1995-05-10', '789U', 'Garden Lane', 'Mumbai', 'Maharashtra', 400003, 2),
(22, 'Suresh Verma', '1998-03-28', '123V', 'Main Avenue', 'Delhi', 'Delhi', 110003, 3),
(23, 'Aarti Gupta', '1997-02-15', '45W', 'Lake Street', 'Bangalore', 'Karnataka', 560003, 4),
(24, 'Rajat Mehta', '1996-11-08', '678X', 'Hill View', 'Hyderabad', 'Telangana', 500003, 5),
(25, 'Nisha Kumar', '1999-09-06', '34Y', 'River Road', 'Chennai', 'Tamil Nadu', 600003, 1),
(26, 'Vivek Patel', '1997-10-02', '89Z', 'Sunset Lane', 'Kolkata', 'West Bengal', 700003, 2),
(27, 'Mohan Sharma', '1994-07-25', '345AA', 'Palm Avenue', 'Pune', 'Maharashtra', 411003, 3),
(28, 'Rani Das', '1998-05-12', '12AB', 'Green Lane', 'Jaipur', 'Rajasthan', 302003, 4),
(29, 'Amita Singh', '1996-04-17', '567AC', 'Meadow Road', 'Ahmedabad', 'Gujarat', 380003, 5),
(30, 'Sanjay Joshi', '1999-01-30', '90AD', 'Mountain View', 'Lucknow', 'Uttar Pradesh', 226003, 1);

-- Insert 20 students from different states, excluding course 5
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin, course_id) VALUES
(31, 'Anand Kapoor', '1998-08-12', '123AE', 'Sunny Road', 'Mumbai', 'Maharashtra', 400004, 1),
(32, 'Rita Singh', '1997-02-20', '45AF', 'Riverfront Avenue', 'Delhi', 'Delhi', 110004, 2),
(33, 'Karthik Reddy', '1999-05-25', '678AG', 'Hillside Lane', 'Bangalore', 'Karnataka', 560004, 3),
(34, 'Mukesh Sharma', '1996-03-15', '234AH', 'Lake View', 'Hyderabad', 'Telangana', 500004, 4),
(35, 'Neha Patel', '1998-10-08', '56AI', 'Garden Lane', 'Chennai', 'Tamil Nadu', 600004, 1),
(36, 'Rajiv Verma', '1995-11-28', '78AJ', 'Main Street', 'Kolkata', 'West Bengal', 700004, 2),
(37, 'Sarita Gupta', '1999-07-12', '90AK', 'Sunset Road', 'Pune', 'Maharashtra', 411004, 1),
(38, 'Arun Khanna', '1997-09-18', '12AL', 'Green Avenue', 'Jaipur', 'Rajasthan', 302004, 2),
(39, 'Suman Joshi', '1996-06-30', '345AM', 'River Bank', 'Ahmedabad', 'Gujarat', 380004, 3),
(40, 'Meera Mehta', '1998-12-15', '789AN', 'Mountain Road', 'Lucknow', 'Uttar Pradesh', 226004, 4),
(41, 'Amita Das', '1997-04-02', '567AO', 'Lake Street', 'Mumbai', 'Maharashtra', 400005, 1),
(42, 'Vijay Kumar', '1999-03-10', '123AP', 'Palm Lane', 'Delhi', 'Delhi', 110005, 2),
(43, 'Priya Verma', '1996-07-22', '45AQ', 'Forest View', 'Bangalore', 'Karnataka', 560005, 3),
(44, 'Deepak Patel', '1998-11-18', '678AR', 'Sunrise Lane', 'Hyderabad', 'Telangana', 500005, 4),
(45, 'Rashmi Sharma', '1997-10-05', '56AS', 'Rose Avenue', 'Chennai', 'Tamil Nadu', 600005, 1),
(46, 'Vishal Mehta', '1995-06-14', '78AT', 'Meadow Avenue', 'Kolkata', 'West Bengal', 700005, 2),
(47, 'Ananya Gupta', '1999-09-30', '90AU', 'Riverfront Road', 'Pune', 'Maharashtra', 411005, 1),
(48, 'Manoj Singh', '1997-08-17', '12AV', 'Hill View', 'Jaipur', 'Rajasthan', 302005, 2),
(49, 'Nisha Khanna', '1996-01-20', '345AW', 'Garden Road', 'Ahmedabad', 'Gujarat', 380005, 3),
(50, 'Rahul Das', '1998-04-05', '789AX', 'Main Lane', 'Lucknow', 'Uttar Pradesh', 226005, 4);


-- Insert 20 more students into the Student table
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin, course_id) VALUES
(51, 'Rahul Kumar', '1998-03-12', '123BA', 'Sunrise Avenue', 'Mumbai', 'Maharashtra', 400006, 1),
(52, 'Aarti Verma', '1997-07-18', '45BB', 'River Lane', 'Delhi', 'Delhi', 110006, 2),
(53, 'Vikram Patel', '1996-05-30', '678BC', 'Hill Road', 'Bangalore', 'Karnataka', 560006, 3),
(54, 'Neha Reddy', '1995-09-15', '234BD', 'Lake Lane', 'Hyderabad', 'Telangana', 500006, 4),
(55, 'Alok Sharma', '1999-01-22', '56BE', 'Garden Avenue', 'Chennai', 'Tamil Nadu', 600006, 1),
(56, 'Anjali Mehta', '1998-08-08', '78BF', 'Main Lane', 'Kolkata', 'West Bengal', 700006, 2),
(57, 'Suresh Kumar', '1996-04-12', '90BG', 'Sunset Lane', 'Pune', 'Maharashtra', 411006, 1),
(58, 'Rajani Singh', '1997-10-25', '12BH', 'Green Road', 'Jaipur', 'Rajasthan', 302006, 2),
(59, 'Monica Gupta', '1995-02-01', '345BI', 'Riverfront Avenue', 'Ahmedabad', 'Gujarat', 380006, 3),
(60, 'Rajeev Verma', '1999-06-10', '789BJ', 'Mountain Lane', 'Lucknow', 'Uttar Pradesh', 226006, 4),
(61, 'Suman Khanna', '1998-12-30', '567BK', 'Lake Road', 'Mumbai', 'Maharashtra', 400007, 1),
(62, 'Preeti Mehta', '1996-11-02', '123BL', 'River View', 'Delhi', 'Delhi', 110007, 2),
(63, 'Deepak Kumar', '1997-03-08', '45BM', 'Lake Avenue', 'Bangalore', 'Karnataka', 560007, 3),
(64, 'Rani Sharma', '1995-07-20', '678BN', 'Green Lane', 'Hyderabad', 'Telangana', 500007, 4),
(65, 'Amita Das', '1999-09-18', '56BO', 'Sunrise Lane', 'Chennai', 'Tamil Nadu', 600007, 1),
(66, 'Sanjay Verma', '1997-08-06', '78BP', 'Palm Avenue', 'Kolkata', 'West Bengal', 700007, 2),
(67, 'Rita Khanna', '1996-01-14', '90BQ', 'Forest Road', 'Pune', 'Maharashtra', 411007, 1),
(68, 'Vijay Mehta', '1998-05-05', '12BR', 'Mountain Road', 'Jaipur', 'Rajasthan', 302007, 2),
(69, 'Meera Singh', '1995-06-28', '345BS', 'River Lane', 'Ahmedabad', 'Gujarat', 380007, 3),
(70, 'Kavita Patel', '1999-04-17', '789BT', 'Hillside Avenue', 'Lucknow', 'Uttar Pradesh', 226007, 4);


-- Insert 10 more students without specifying a course
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin) VALUES
(71, 'Rajesh Singh', '1998-08-25', '123CA', 'Sunny Lane', 'Mumbai', 'Maharashtra', 400008),
(72, 'Meena Sharma', '1997-04-10', '45CB', 'River View', 'Delhi', 'Delhi', 110008),
(73, 'Vikas Verma', '1996-05-15', '678CC', 'Hilltop Road', 'Bangalore', 'Karnataka', 560008),
(74, 'Anita Patel', '1995-09-20', '234CD', 'Lake Avenue', 'Hyderabad', 'Telangana', 500008),
(75, 'Rahul Kumar', '1999-01-02', '56CE', 'Garden Lane', 'Chennai', 'Tamil Nadu', 600008),
(76, 'Priya Mehta', '1998-08-18', '78CF', 'Main Road', 'Kolkata', 'West Bengal', 700008),
(77, 'Suresh Sharma', '1996-04-05', '90CG', 'Sunrise Road', 'Pune', 'Maharashtra', 411008),
(78, 'Neha Khanna', '1997-10-12', '12CH', 'Green Lane', 'Jaipur', 'Rajasthan', 302008),
(79, 'Rajat Verma', '1995-02-28', '345CI', 'Riverfront Lane', 'Ahmedabad', 'Gujarat', 380008),
(80, 'Kavita Gupta', '1999-06-15', '789CJ', 'Mountain Avenue', 'Lucknow', 'Uttar Pradesh', 226008);


-- Insert 5 more courses into the Course table
INSERT INTO Course (course_id, course_name) VALUES
(6, 'Go Programming'),
(7, 'Rust Programming'),
(8, 'AWS Certification'),
(9, 'Google Cloud Platform (GCP)'),
(10, 'Full Stack Development');


-- Insert 20 students into the Student table and assign them to the new courses
INSERT INTO Student (student_id, student_name, dob, doorNum, street, city, state, pin, course_id) VALUES
(81, 'Amit Goel', '1997-05-22', '123CK', 'Sunny Lane', 'Mumbai', 'Maharashtra', 400009, 6),
(82, 'Nisha Rustagi', '1998-09-18', '45CL', 'River View', 'Delhi', 'Delhi', 110009, 7),
(83, 'Rajeev AWS', '1996-06-30', '678CM', 'Hilltop Road', 'Bangalore', 'Karnataka', 560009, 8),
(84, 'Sonia GCP', '1995-12-05', '234CN', 'Lake Avenue', 'Hyderabad', 'Telangana', 500009, 9),
(85, 'Meena Fullstack', '1999-02-10', '56CO', 'Garden Lane', 'Chennai', 'Tamil Nadu', 600009, 10),
(86, 'Anand Goel', '1998-08-25', '78CP', 'Main Road', 'Kolkata', 'West Bengal', 700009, 6),
(87, 'Rita Rustagi', '1997-07-12', '90CQ', 'Sunrise Avenue', 'Pune', 'Maharashtra', 411009, 7),
(88, 'Vikram AWS', '1996-05-28', '12CR', 'Green Lane', 'Jaipur', 'Rajasthan', 302009, 8),
(89, 'Rahul GCP', '1995-09-14', '345CS', 'Riverfront Lane', 'Ahmedabad', 'Gujarat', 380009, 9),
(90, 'Neha Fullstack', '1999-01-20', '789CT', 'Mountain Avenue', 'Lucknow', 'Uttar Pradesh', 226009, 10),
(91, 'Amita Goel', '1997-03-12', '123CU', 'Sunny Road', 'Mumbai', 'Maharashtra', 400010, 6),
(92, 'Rajesh Rustagi', '1998-10-18', '45CV', 'Riverfront Avenue', 'Delhi', 'Delhi', 110010, 7),
(93, 'Vikas AWS', '1996-04-30', '678CW', 'Hill Road', 'Bangalore', 'Karnataka', 560010, 8),
(94, 'Anita GCP', '1995-08-15', '234CX', 'Lake Lane', 'Hyderabad', 'Telangana', 500010, 9),
(95, 'Rahul Fullstack', '1999-03-02', '56CY', 'Garden Avenue', 'Chennai', 'Tamil Nadu', 600010, 10),
(96, 'Priya Goel', '1998-07-18', '78CZ', 'Main Lane', 'Kolkata', 'West Bengal', 700010, 6),
(97, 'Suresh Rustagi', '1996-02-10', '90DA', 'Sunset Lane', 'Pune', 'Maharashtra', 411010, 7),
(98, 'Neha AWS', '1997-12-25', '12DB', 'Green Road', 'Jaipur', 'Rajasthan', 302010, 8),
(99, 'Rajat GCP', '1995-05-01', '345DC', 'River View', 'Ahmedabad', 'Gujarat', 380010, 9),
(100, 'Vivek Fullstack', '1999-07-15', '789DD', 'Mountain Road', 'Lucknow', 'Uttar Pradesh', 226010, 10);
