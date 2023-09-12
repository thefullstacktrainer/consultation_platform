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