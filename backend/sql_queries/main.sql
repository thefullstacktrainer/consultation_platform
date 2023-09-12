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