-- drop database student;
create database student;
show DATABASES;
use student;
CREATE TABLE Course(
    course_id INT PRIMARY KEY,
    course_name VARCHAR(255)
);
CREATE TABLE Student (
    student_id INT PRIMARY KEY, 
    student_name VARCHAR(255), 
    dob DATE, 
    doorNum VARCHAR(255), 
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    pin INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);
CREATE TABLE Lecturer(
    lecturer_id INT PRIMARY KEY,
    lecturer_name VARCHAR(255),
    course_id int,
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);
CREATE TABLE Subject(
    subject_id INT PRIMARY KEY,
    subject_name VARCHAR(255),
    lecturer_id int,
    FOREIGN KEY (lecturer_id) REFERENCES Lecturer(lecturer_id)
);
CREATE TABLE Stud_Hobby(
    student_id INT,
    hobby VARCHAR(255),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);
show tables;



