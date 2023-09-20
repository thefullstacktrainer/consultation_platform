create DATABASE if NOT EXISTS assignment_hub;

use assignment_hub;

-- Create the Students table
CREATE TABLE IF NOT EXISTS Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL
);

-- Create the Batches table
CREATE TABLE IF NOT EXISTS Batches (
    batch_id INT AUTO_INCREMENT PRIMARY KEY,
    batch_name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

-- Create the Trainers table
CREATE TABLE IF NOT EXISTS Trainers (
    trainer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    expertise_area VARCHAR(100) NOT NULL
);

-- Create the Students_Batches (Intermediate) table
CREATE TABLE IF NOT EXISTS Students_Batches (
    student_batch_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    batch_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (batch_id) REFERENCES Batches(batch_id)
);

-- Create the Batch_Trainers (Intermediate) table
CREATE TABLE IF NOT EXISTS Batch_Trainers (
    batch_trainer_id INT AUTO_INCREMENT PRIMARY KEY,
    batch_id INT NOT NULL,
    trainer_id INT NOT NULL,
    FOREIGN KEY (batch_id) REFERENCES Batches(batch_id),
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id)
);

-- Create the Assignments table
CREATE TABLE IF NOT EXISTS Assignments (
    assignment_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    deadline_date DATE NOT NULL,
    max_score INT NOT NULL
);

-- Create the Questions table
CREATE TABLE IF NOT EXISTS Questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL
);

-- Create the Assignment_Questions (Intermediate) table
CREATE TABLE IF NOT EXISTS Assignment_Questions (
    assignment_question_id INT AUTO_INCREMENT PRIMARY KEY,
    assignment_id INT NOT NULL,
    question_id INT NOT NULL,
    FOREIGN KEY (assignment_id) REFERENCES Assignments(assignment_id),
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);

-- Insert sample data into Students table
INSERT IGNORE INTO Students (first_name, last_name, date_of_birth, email, phone)
VALUES
    ('Amit', 'Sharma', '1995-03-15', 'amit.sharma@example.com', '9876543210'),
    ('Priya', 'Patel', '1997-08-21', 'priya.patel@example.com', '8765432109'),
    ('Rajesh', 'Kumar', '1998-05-10', 'rajesh.kumar@example.com', '7654321098'),
    ('Neha', 'Singh', '1996-12-03', 'neha.singh@example.com', '6543210987'),
    ('Aarti', 'Mishra', '1999-07-19', 'aarti.mishra@example.com', '5432109876');

-- Insert sample data into Batches table
INSERT IGNORE INTO Batches (batch_name, start_date, end_date)
VALUES
    ('Batch A', '2023-09-01', '2023-12-15'),
    ('Batch B', '2023-10-15', '2024-02-28'),
    ('Batch C', '2023-11-20', '2024-03-10');

-- Insert sample data into Trainers table
INSERT IGNORE INTO Trainers (first_name, last_name, expertise_area)
VALUES
    ('Sunita', 'Verma', 'Mathematics'),
    ('Rahul', 'Shah', 'Computer Science'),
    ('Suresh', 'Gupta', 'Physics'),
    ('Pooja', 'Reddy', 'Chemistry'),
    ('Anil', 'Malik', 'History');

-- Insert sample data into Students_Batches (Intermediate) table
INSERT IGNORE INTO Students_Batches (student_id, batch_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 2),
    (5, 3);

-- Insert sample data into Batch_Trainers (Intermediate) table
INSERT IGNORE INTO Batch_Trainers (batch_id, trainer_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5);

-- Insert sample data into Assignments table
INSERT IGNORE INTO Assignments (title, description, deadline_date, max_score)
VALUES
    ('Assignment 1', 'This is the first assignment', '2023-10-10', 100),
    ('Assignment 2', 'This is the second assignment', '2023-11-15', 90),
    ('Assignment 3', 'This is the third assignment', '2023-12-20', 80);

-- Insert sample data into Questions table
INSERT IGNORE INTO Questions (question_text)
VALUES
    ('Question 1: What is the capital of India?'),
    ('Question 2: Solve for x: 2x + 5 = 15'),
    ('Question 3: Describe the concept of object-oriented programming.'),
    ('Question 4: What is the significance of the periodic table in chemistry?'),
    ('Question 5: Discuss the causes and consequences of World War II.');

-- Associate questions with assignments
-- For example, associate questions with Assignment 1
INSERT IGNORE INTO Assignment_Questions (assignment_id, question_id)
VALUES
    (1, 1),  -- Capital of India question
    (1, 2);  -- Solve for x question

-- Associate questions with Assignment 2
INSERT IGNORE INTO Assignment_Questions (assignment_id, question_id)
VALUES
    (2, 3),  -- Object-oriented programming question
    (2, 4);  -- Significance of periodic table question

-- Associate questions with Assignment 3
INSERT IGNORE INTO Assignment_Questions (assignment_id, question_id)
VALUES
    (3, 5);  -- Causes and consequences of World War II question
