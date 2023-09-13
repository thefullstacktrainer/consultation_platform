drop DATABASE consultation_platform;

create DATABASE consultation_platform;

use consultation_platform;

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

-- Create a 'content' table with relevant fields

CREATE TABLE
    content (
        content_id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content_text TEXT,
        created_by INT NOT NULL,
        -- User ID of the content creator
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        visibility ENUM('public', 'private') DEFAULT 'public',
        -- Public or private content
        status ENUM(
            'draft',
            'published',
            'archived'
        ) DEFAULT 'draft',
        views INT DEFAULT 0,
        -- Number of views
        likes INT DEFAULT 0,
        -- Number of likes
        shares INT DEFAULT 0 -- Number of shares
        -- Add other relevant fields as needed
    );

-- Create a table for content categories

CREATE TABLE
    content_categories (
        category_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        created_by INT NOT NULL,
        -- User ID of the creator (admin or authorized publisher)
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(user_id) -- Assuming 'users' table for admins and publishers
    );

-- Create a table to associate categories with content

CREATE TABLE
    content_category_mapping (
        content_id INT NOT NULL,
        -- ID of the content item
        category_id INT NOT NULL,
        -- ID of the category
        PRIMARY KEY (content_id, category_id),
        FOREIGN KEY (content_id) REFERENCES content(content_id),
        -- Assuming 'content' table
        FOREIGN KEY (category_id) REFERENCES content_categories(category_id)
    );

show tables;

-- Insert sample content categories created by Admin User

INSERT INTO
    content_categories (
        name,
        description,
        image_url,
        created_by
    )
VALUES (
        'Technology',
        'All things related to technology',
        'tech.jpg',
        1
    ), (
        'Fashion',
        'Fashion trends and styling',
        'fashion.jpg',
        1
    ), (
        'Health',
        'Health and wellness topics',
        'health.jpg',
        2
    );

-- Insert sample content categories created by Publishers

INSERT INTO
    content_categories (
        name,
        description,
        image_url,
        created_by
    )
VALUES (
        'Travel',
        'Travel destinations and experiences',
        'travel.jpg',
        2
    ), (
        'Food',
        'Culinary delights and recipes',
        'food.jpg',
        3
    );

-- Insert content-category associations for content items

-- Insert sample content items into the 'content' table

INSERT INTO
    content (
        title,
        content_text,
        created_by
    )
VALUES (
        'Tech Article 1',
        'Content text for tech article 1',
        1
    ), (
        'Fashion Blog',
        'Content text for fashion blog',
        2
    ), (
        'Travel Diary',
        'Content text for travel diary',
        3
    ), (
        'Food Recipe',
        'Content text for food recipe',
        4
    );

-- Now, insert content-category associations for content items

INSERT INTO
    content_category_mapping (content_id, category_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 5);

select * from content;

SELECT * from content_categories;

SELECT * from content_category_mapping ;

SELECT * from user_profiles ;

SELECT * from user_roles ;

SELECT * from users ;

COMMIT;

-- Create a table to store consultation requests

CREATE TABLE
    consultation_requests (
        request_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        category_id INT NOT NULL,
        query TEXT NOT NULL,
        preferred_advisor INT,
        status ENUM('open', 'closed') DEFAULT 'open',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (category_id) REFERENCES content_categories(category_id),
        FOREIGN KEY (preferred_advisor) REFERENCES users(user_id)
    );

-- Create a table to store consultation responses

CREATE TABLE
    consultation_responses (
        response_id INT AUTO_INCREMENT PRIMARY KEY,
        request_id INT NOT NULL,
        advisor_id INT NOT NULL,
        message TEXT NOT NULL,
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (request_id) REFERENCES consultation_requests(request_id),
        FOREIGN KEY (advisor_id) REFERENCES users(user_id)
    );

-- Create a table to manage messages in the messaging system

CREATE TABLE
    messages (
        message_id INT AUTO_INCREMENT PRIMARY KEY,
        sender_id INT NOT NULL,
        receiver_id INT NOT NULL,
        content TEXT NOT NULL,
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (sender_id) REFERENCES users(user_id),
        FOREIGN KEY (receiver_id) REFERENCES users(user_id)
    );

show tables;

-- Insert new content categories

INSERT INTO
    content_categories (
        name,
        description,
        image_url,
        created_by
    )
VALUES (
        'Category 1',
        'Description of Category 1',
        'category1.jpg',
        1
    ), (
        'Category 2',
        'Description of Category 2',
        'category2.jpg',
        1
    );

-- Insert sample consultation requests with valid category_id values

INSERT INTO
    consultation_requests (
        user_id,
        category_id,
        query,
        preferred_advisor,
        status
    )
VALUES (
        1,
        1,
        'Need financial advice for investment',
        3,
        'open'
    ), (
        2,
        2,
        'Healthcare query related to nutrition',
        2,
        'open'
    ), (
        3,
        3,
        'Software development project assistance',
        6,
        'open'
    ), (
        4,
        4,
        'Teaching methods for mathematics',
        7,
        'open'
    ), (
        5,
        1,
        'Real estate investment guidance',
        5,
        'open'
    ), (
        6,
        2,
        'Artistic writing tips',
        10,
        'open'
    ), (
        7,
        3,
        'IT infrastructure upgrade consultation',
        9,
        'open'
    ), (
        8,
        4,
        'Fitness training plan',
        8,
        'open'
    ), (
        9,
        5,
        'Digital marketing strategy',
        11,
        'open'
    ), (
        10,
        6,
        'Psychological counseling session',
        12,
        'open'
    );

-- Insert sample consultation responses with valid request_id values

INSERT INTO
    consultation_responses (
        request_id,
        advisor_id,
        message
    )
VALUES (
        31,
        3,
        'Sure, I can help you with your investment. Let\'s discuss your goals.'
    ), (
        32,
        2,
        'I can provide you with nutrition advice. Please share more details.'
    ), (
        33,
        6,
        'I have experience in software development. Let\'s talk about your project.'
    ), (
        34,
        7,
        'I can assist with teaching methods. Tell me more about your needs.'
    ), (
        35,
        5,
        'I specialize in real estate. Let\'s discuss your investment plans.'
    ), (
        36,
        10,
        'I can provide tips for artistic writing. What do you need help with?'
    ), (
        37,
        9,
        'I offer IT consulting services. Let\'s plan the upgrade.'
    ), (
        38,
        8,
        'I can create a fitness training plan for you. What are your goals?'
    ), (
        39,
        11,
        'I specialize in digital marketing. Let\'s discuss your strategy.'
    ), (
        40,
        12,
        'I offer psychological counseling. We can talk about your concerns.'
    );

-- Insert sample messages with sender and receiver IDs

INSERT INTO
    messages (
        sender_id,
        receiver_id,
        content
    )
VALUES (
        1,
        3,
        'Hi, I\'m interested in your advice for investment.'
    ), (
        3,
        1,
        'Sure, I can help you with that. Let\'s chat.'
    ), (
        2,
        6,
        'Can you provide nutritional guidance?'
    ), (
        6,
        2,
        'Of course, I have expertise in nutrition. What do you need?'
    ), (
        4,
        7,
        'I need teaching methods advice.'
    ), (
        7,
        4,
        'I can assist with that. Let\'s discuss.'
    ), (
        5,
        10,
        'Tell me more about real estate investment.'
    ), (
        10,
        5,
        'I can help you make informed decisions. Let\'s chat.'
    ), (
        9,
        11,
        'I need help with digital marketing.'
    ), (
        11,
        9,
        'I can provide guidance. What\'s your business?'
    );

show tables;

show create table content;

-- Insert content data to match user reviews

INSERT INTO
    content (
        title,
        content_text,
        created_by,
        created_at
    )
VALUES (
        'Technology Article',
        'This is a technology article that covers various tech topics.',
        1,
        NOW()
    ), (
        'Healthcare Content',
        'This content provides insights into healthcare and nutrition.',
        2,
        NOW()
    ), (
        'Finance Article',
        'Learn about finance and investment in this informative article.',
        3,
        NOW()
    ), (
        'Education Resource',
        'This resource contains educational content on various subjects.',
        4,
        NOW()
    ), (
        'Travel Guide',
        'Explore exciting travel destinations with this travel guide.',
        5,
        NOW()
    );

-- Insert additional content data

INSERT INTO
    content (
        title,
        content_text,
        created_by,
        created_at
    )
VALUES (
        'Artistic Creations',
        'Discover the world of art with these amazing creations.',
        6,
        NOW()
    ), (
        'IT Trends',
        'Stay updated with the latest trends in the IT industry.',
        7,
        NOW()
    ), (
        'Fitness Tips',
        'Achieve your fitness goals with these useful tips.',
        8,
        NOW()
    ), (
        'Marketing Strategies',
        'Learn effective marketing strategies for your business.',
        9,
        NOW()
    ), (
        'Mindfulness Meditation',
        'Practice mindfulness with guided meditation sessions.',
        10,
        NOW()
    );

CREATE TABLE
    content_tags (
        tag_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    content_tag_mapping (
        content_id INT NOT NULL,
        tag_id INT NOT NULL,
        PRIMARY KEY (content_id, tag_id),
        FOREIGN KEY (content_id) REFERENCES content(content_id),
        FOREIGN KEY (tag_id) REFERENCES content_tags(tag_id)
    );

CREATE TABLE
    user_reviews (
        review_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        content_id INT NOT NULL,
        rating INT,
        review_text TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (content_id) REFERENCES content(content_id)
    );

CREATE TABLE
    consultation_bookings (
        booking_id INT AUTO_INCREMENT PRIMARY KEY,
        request_id INT NOT NULL,
        advisor_id INT NOT NULL,
        booked_date DATE NOT NULL,
        booked_time TIME NOT NULL,
        status ENUM(
            'confirmed',
            'pending',
            'cancelled'
        ) DEFAULT 'pending',
        FOREIGN KEY (request_id) REFERENCES consultation_requests(request_id),
        FOREIGN KEY (advisor_id) REFERENCES users(user_id)
    );

INSERT INTO
    consultation_bookings (
        request_id,
        advisor_id,
        booked_date,
        booked_time,
        status
    )
VALUES (
        31,
        3,
        '2023-09-20',
        '10:00:00',
        'confirmed'
    ), (
        32,
        2,
        '2023-09-15',
        '14:30:00',
        'confirmed'
    ), (
        41,
        6,
        '2023-09-18',
        '16:00:00',
        'pending'
    ), (
        42,
        7,
        '2023-09-17',
        '11:30:00',
        'pending'
    ), (
        51,
        5,
        '2023-09-19',
        '13:45:00',
        'confirmed'
    );

-- Create a table for user ratings

CREATE TABLE
    user_ratings (
        rating_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        rated_user_id INT NOT NULL,
        rating DECIMAL(3, 2) NOT NULL,
        review TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (rated_user_id) REFERENCES users(user_id)
    );

-- Create a table for content ratings and reviews

CREATE TABLE
    content_ratings (
        content_rating_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        content_id INT NOT NULL,
        rating DECIMAL(3, 2) NOT NULL,
        review TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (content_id) REFERENCES content(content_id)
    );

-- User Ratings and Reviews

INSERT INTO
    user_ratings (
        user_id,
        rated_user_id,
        rating,
        review
    )
VALUES (
        1,
        3,
        4.5,
        'Excellent financial advice! Amit really knows his stuff.'
    ), (
        2,
        6,
        4.0,
        'Priya helped me improve my health significantly with her guidance.'
    ), (
        3,
        1,
        3.8,
        'Rajesh is a knowledgeable software developer, but communication could be better.'
    ), (
        4,
        7,
        4.2,
        'Anjali is a fantastic teacher; her teaching methods are effective.'
    ), (
        5,
        10,
        4.5,
        'Sanjay gave me great insights into real estate investment.'
    ), (
        6,
        2,
        3.5,
        'Sarika provides creative writing tips with a unique perspective.'
    ), (
        7,
        3,
        4.0,
        'Naveen has been a valuable asset for our IT infrastructure upgrade.'
    ), (
        8,
        8,
        4.2,
        'Preeti helped me achieve my fitness goals with her training plan.'
    ), (
        9,
        9,
        3.9,
        'Arjun provided some useful insights into digital marketing.'
    ), (
        10,
        5,
        4.5,
        'Meera offers excellent psychological counseling services.'
    );

-- Content Ratings and Reviews

INSERT INTO
    content_ratings (
        user_id,
        content_id,
        rating,
        review
    )
VALUES (
        1,
        1,
        4.0,
        'Informative tech article with up-to-date information.'
    ), (
        2,
        2,
        4.2,
        'Priya\'s fashion blog is trendy and well-written.'
    ), (
        3,
        3,
        3.9,
        'Rajesh\'s travel diary captures amazing experiences.'
    ), (
        4,
        4,
        4.5,
        'Anjali\'s food recipe is delicious; I tried it at home.'
    ), (
        5,
        1,
        4.2,
        'Another great tech article by Sanjay.'
    ), (
        6,
        2,
        3.8,
        'Sarika\'s fashion tips were helpful for my wardrobe makeover.'
    ), (
        7,
        3,
        4.0,
        'The travel diary by Naveen was a pleasant read.'
    ), (
        8,
        4,
        4.2,
        'Preeti\'s food recipe is now a family favorite.'
    ), (
        9,
        1,
        3.9,
        'Arjun\'s tech article is insightful and practical.'
    ), (
        10,
        5,
        4.5,
        'Meera\'s psychological counseling content is enlightening.'
    );

-- Create a table for the Notification System

CREATE TABLE
    notifications (
        notification_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_read BOOLEAN DEFAULT FALSE,
        notification_type ENUM(
            'consultation_request',
            'consultation_booking_accepted',
            'new_message',
            'content_update'
        ) NOT NULL,
        related_id INT,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

select * from user_profiles where expertise_areas LIKE '%Education%';

consultation_rates expertise_areas 

select * from users where user_id IN (4,14);

name email 

select
    u.name,
    u.email,
    up.expertise_areas,
    up.consultation_rates
from
    users as u,
    user_profiles as up
where
    u.user_id = up.user_id
    and up.expertise_areas LIKE '%Education%';

select u.name, u.email
from users as u
where u.user_id in (
        select up2.user_id
        from user_profiles up2
        where
            up2.expertise_areas LIKE '%Education%'
    );