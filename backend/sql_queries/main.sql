-- Create a table to store user information

CREATE TABLE
    users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        profile_picture VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        verification_method VARCHAR(50)
    );

-- Create a table to store user profile details

CREATE TABLE
    user_profiles (
        profile_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        expertise_areas TEXT,
        consultation_rates DECIMAL(10, 2),
        bio_and_introduction TEXT,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

-- Create a table to store user roles (e.g., participant, advisor, publisher)

CREATE TABLE
    user_roles (
        role_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        role_name VARCHAR(50) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

-- Create an index on email for faster lookups (optional)

CREATE INDEX idx_email ON users(email);

-- Insert 10 sample user records into the 'users' table

INSERT INTO
    users (
        name,
        profile_picture,
        email,
        verification_method
    )
VALUES (
        'Amit Patel',
        'profile1.jpg',
        'amit@email.com',
        'Email Verified'
    ), (
        'Priya Sharma',
        'profile2.jpg',
        'priya@email.com',
        'Email Verified'
    ), (
        'Rajesh Kumar',
        'profile3.jpg',
        'rajesh@email.com',
        'Email Verified'
    ), (
        'Anjali Singh',
        'profile4.jpg',
        'anjali@email.com',
        'Email Verified'
    ), (
        'Sanjay Verma',
        'profile5.jpg',
        'sanjay@email.com',
        'Email Verified'
    ), (
        'Sarika Gupta',
        'profile6.jpg',
        'sarika@email.com',
        'Email Verified'
    ), (
        'Naveen Reddy',
        'profile7.jpg',
        'naveen@email.com',
        'Email Verified'
    ), (
        'Preeti Agarwal',
        'profile8.jpg',
        'preeti@email.com',
        'Email Verified'
    ), (
        'Arjun Khanna',
        'profile9.jpg',
        'arjun@email.com',
        'Email Verified'
    ), (
        'Meera Joshi',
        'profile10.jpg',
        'meera@email.com',
        'Email Verified'
    );

-- Insert sample profile details for the 10 users into the 'user_profiles' table

INSERT INTO
    user_profiles (
        user_id,
        expertise_areas,
        consultation_rates,
        bio_and_introduction
    )
VALUES (
        1,
        'Finance, Investments',
        50.00,
        'I am a financial advisor with expertise in investments.'
    ), (
        2,
        'Healthcare, Nutrition',
        60.00,
        'I provide guidance on maintaining a healthy lifestyle.'
    ), (
        3,
        'Software Development',
        75.00,
        'I am a software developer with 10 years of experience.'
    ), (
        4,
        'Education, Teaching',
        45.00,
        'I am a passionate teacher helping students excel.'
    ), (
        5,
        'Real Estate, Property',
        80.00,
        'I specialize in residential and commercial property sales.'
    ), (
        6,
        'Art, Creative Writing',
        40.00,
        'I am a writer and artist with a love for creativity.'
    ), (
        7,
        'Technology, IT',
        70.00,
        'I provide IT consulting services for businesses.'
    ), (
        8,
        'Fitness, Personal Training',
        55.00,
        'I help clients achieve their fitness goals.'
    ), (
        9,
        'Marketing, Advertising',
        65.00,
        'I am a marketing expert with a focus on online advertising.'
    ), (
        10,
        'Psychology, Counseling',
        50.00,
        'I offer counseling services for mental well-being.'
    );

-- Insert sample roles for the 10 users into the 'user_roles' table

INSERT INTO
    user_roles (user_id, role_name)
VALUES (1, 'advisor'), (2, 'advisor'), (3, 'advisor'), (4, 'participant'), (5, 'advisor'), (6, 'participant'), (7, 'advisor'), (8, 'advisor'), (9, 'advisor'), (10, 'advisor');

-- write a query to get the details of the users and user profiles

select
    user_profiles.expertise_areas,
    user_profiles.consultation_rates,
    user_profiles.bio_and_introduction,
    users.name,
    users.profile_picture
from user_profiles, users
where
    user_profiles.user_id = users.user_id;

SELECT users.name
from user_roles, users
where
    role_name = 'advisor'
    and users.user_id = user_roles.user_id;

-- Insert 10 more sample user records into the 'users' table

INSERT INTO
    users (
        name,
        profile_picture,
        email,
        verification_method
    )
VALUES (
        'Rahul Gupta',
        'profile11.jpg',
        'rahul@email.com',
        'Email Verified'
    ), (
        'Sneha Kapoor',
        'profile12.jpg',
        'sneha@email.com',
        'Email Verified'
    ), (
        'Vikram Singh',
        'profile13.jpg',
        'vikram@email.com',
        'Email Verified'
    ), (
        'Neha Sharma',
        'profile14.jpg',
        'neha@email.com',
        'Email Verified'
    ), (
        'Kiran Reddy',
        'profile15.jpg',
        'kiran@email.com',
        'Email Verified'
    ), (
        'Rajeshwari Iyer',
        'profile16.jpg',
        'rajeshwari@email.com',
        'Email Verified'
    ), (
        'Shiv Kumar',
        'profile17.jpg',
        'shiv@email.com',
        'Email Verified'
    ), (
        'Aishwarya Pandey',
        'profile18.jpg',
        'aishwarya@email.com',
        'Email Verified'
    ), (
        'Vishal Verma',
        'profile19.jpg',
        'vishal@email.com',
        'Email Verified'
    ), (
        'Suman Joshi',
        'profile20.jpg',
        'suman@email.com',
        'Email Verified'
    );

-- Insert sample profile details for the additional 10 users into the 'user_profiles' table

INSERT INTO
    user_profiles (
        user_id,
        expertise_areas,
        consultation_rates,
        bio_and_introduction
    )
VALUES (
        11,
        'Marketing, Sales',
        70.00,
        'I specialize in digital marketing and sales strategies.'
    ), (
        12,
        'Fashion, Styling',
        45.00,
        'I provide fashion and styling advice for all occasions.'
    ), (
        13,
        'Technology, Coding',
        80.00,
        'I am a software engineer with a passion for coding.'
    ), (
        14,
        'Education, Research',
        55.00,
        'I conduct educational research and offer consulting.'
    ), (
        15,
        'Real Estate, Rentals',
        75.00,
        'I help clients find the perfect rental properties.'
    ), (
        16,
        'Art, Painting',
        35.00,
        'I am a professional painter with a unique style.'
    ), (
        17,
        'IT, Networking',
        65.00,
        'I specialize in network infrastructure solutions.'
    ), (
        18,
        'Fitness, Yoga',
        60.00,
        'I provide yoga training for health and relaxation.'
    ), (
        19,
        'Business, Management',
        90.00,
        'I offer business management consultancy services.'
    ), (
        20,
        'Psychology, Therapy',
        50.00,
        'I am a therapist helping individuals overcome challenges.'
    );

-- Insert sample roles for the additional 10 users into the 'user_roles' table

INSERT INTO
    user_roles (user_id, role_name)
VALUES (11, 'advisor'), (12, 'advisor'), (13, 'advisor'), (14, 'participant'), (15, 'advisor'), (16, 'participant'), (17, 'advisor'), (18, 'advisor'), (19, 'advisor'), (20, 'advisor');

-- Update the roles for some users to be 'publisher' instead of 'advisor'

UPDATE user_roles
SET role_name = 'publisher'
WHERE
    user_id IN (11, 13, 16, 18, 20);

SELECT users.name
from user_roles, users
where (
        role_name = 'advisor'
        or role_name = 'publisher'
    )
    and users.user_id = user_roles.user_id;