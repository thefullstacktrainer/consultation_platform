-- Active: 1695099026491@@127.0.0.1@3306@AssignmentHub
-- Drop the AssignmentHub database
DROP DATABASE IF EXISTS AssignmentHub;
-- Create the AssignmentHub database
CREATE DATABASE AssignmentHub;

-- Use the AssignmentHub database
USE AssignmentHub;

-- Create the Students table with additional columns
CREATE TABLE Students (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    StudentName VARCHAR(100),
    Email VARCHAR(100),
    BirthDate DATE,
    Major VARCHAR(50),
    EnrollmentYear INT
);

-- Create the Assignments table with additional columns
CREATE TABLE Assignments (
    AssignmentID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    AssignmentName VARCHAR(100),
    DueDate DATE,
    Description TEXT,
    MaxScore DECIMAL(5, 2),
    SubmissionDate DATETIME,
    Email VARCHAR(100)
);


-- Insert sample records into the Students table with anomalies
INSERT INTO Students (StudentName, Email, BirthDate, Major, EnrollmentYear)
VALUES
    ('Rahul Sharma', 'rahul.sharma@example.com', '1995-03-12', 'Computer Science', 2021),
    ('Priya Patel', 'priya.patel@example.com', '1998-07-21', 'Biology', 2020),
    ('Amit Kumar', 'amit.kumar@example.com', '1997-01-05', 'Physics', 2019),
    ('Neha Gupta', NULL, '1996-09-15', 'Mathematics', 2022),
    ('Deepak Verma', 'deepak.verma@example.com', '1999-11-28', 'Chemistry', 2021);

-- Insert a record with a missing Email
INSERT INTO Students (StudentName, BirthDate, Major, EnrollmentYear)
VALUES
    ('Sneha Desai', '1994-05-20', 'History', 2018);

-- Insert a record with a non-atomic StudentName
INSERT INTO Students (StudentName, Email, BirthDate, Major, EnrollmentYear)
VALUES
    ('Anu Rani Sharma', 'anu.sharma@example.com', '2000-02-08', 'Art', 2023);

-- Insert a record with a non-unique Email
INSERT INTO Students (StudentName, Email, BirthDate, Major, EnrollmentYear)
VALUES
    ('Neha Gupta', 'priya.patel@example.com', '1997-06-10', 'Economics', 2020);


-- Insert sample records into the Assignments table with anomalies
INSERT INTO Assignments (StudentID, AssignmentName, DueDate, Description, MaxScore, SubmissionDate, Email)
VALUES
    (1, 'Database Project', '2023-05-30', 'Create a database project', 100.00, '2023-05-28 15:30:00', 'rahul.sharma@example.com'),
    (2, 'Lab Report', '2023-06-15', 'Write a biology lab report', 90.00, '2023-06-10 10:00:00', 'priya.patel@example.com'),
    (3, 'Physics Quiz', '2023-06-20', 'Take a physics quiz', 50.00, '2023-06-22 14:45:00', 'amit.kumar@example.com'),
    (4, 'Math Homework', '2023-06-10', 'Solve math problems', 80.00, '2023-06-08 16:20:00', NULL),
    (5, 'Chemistry Experiment', '2023-06-25', 'Conduct a chemistry experiment', 95.00, '2023-06-20 11:55:00', 'deepak.verma@example.com');

-- Insert a record with a missing StudentID (foreign key violation)
INSERT INTO Assignments (AssignmentName, DueDate, Description, MaxScore, SubmissionDate, Email)
VALUES
    ('History Essay', '2023-06-05', 'Write a history essay', 75.00, '2023-06-03 14:00:00', 'sneha.desai@example.com');

-- Update an Assignment's Email to a non-existent student's email
UPDATE Assignments
SET Email = 'anu.sharma@example.com'
WHERE AssignmentName = 'Database Project';

-- Delete a student record, causing potential referential integrity issues
DELETE FROM Students
WHERE StudentName = 'Rahul Sharma';

show tables;

select * from Assignments;

SELECT * from Students;