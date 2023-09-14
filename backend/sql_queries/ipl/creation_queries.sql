DROP DATABASE ipl_db;

CREATE DATABASE ipl_db;

USE ipl_db;

CREATE TABLE
    teams (
        team_id INT AUTO_INCREMENT PRIMARY KEY,
        team_name VARCHAR(255) NOT NULL,
        owner VARCHAR(255),
        coach VARCHAR(255),
        home_venue VARCHAR(255)
    );

CREATE TABLE
    players (
        player_id INT AUTO_INCREMENT PRIMARY KEY,
        player_name VARCHAR(255) NOT NULL,
        team_id INT,
        nationality VARCHAR(50),
        date_of_birth DATE,
        total_runs INT,
        total_hundreds INT,
        total_fifties INT,
        total_fours INT,
        total_sixes INT,
        total_wickets INT,
        total_catches INT,
        total_stumpings INT,
        total_run_outs INT,
        FOREIGN KEY (team_id) REFERENCES teams(team_id)
    );

CREATE TABLE
    seasons (
        season_id INT AUTO_INCREMENT PRIMARY KEY,
        year INT NOT NULL,
        start_date DATE,
        end_date DATE
    );

CREATE TABLE
    venues (
        venue_id INT AUTO_INCREMENT PRIMARY KEY,
        venue_name VARCHAR(255) NOT NULL,
        city VARCHAR(255),
        capacity INT
    );

CREATE TABLE
    umpires (
        umpire_id INT AUTO_INCREMENT PRIMARY KEY,
        umpire_name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    commentators (
        commentator_id INT AUTO_INCREMENT PRIMARY KEY,
        commentator_name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    matches (
        match_id INT AUTO_INCREMENT PRIMARY KEY,
        season_id INT,
        match_date DATE,
        venue_id INT,
        team1_id INT,
        team2_id INT,
        result VARCHAR(255),
        winning_team_id INT,
        umpire1_id INT,
        umpire2_id INT,
        FOREIGN KEY (season_id) REFERENCES seasons(season_id),
        FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
        FOREIGN KEY (team1_id) REFERENCES teams(team_id),
        FOREIGN KEY (team2_id) REFERENCES teams(team_id),
        FOREIGN KEY (winning_team_id) REFERENCES teams(team_id),
        FOREIGN KEY (umpire1_id) REFERENCES umpires(umpire_id),
        FOREIGN KEY (umpire2_id) REFERENCES umpires(umpire_id)
    );

CREATE TABLE
    match_commentators (
        match_commentator_id INT AUTO_INCREMENT,
        match_id INT,
        commentator_id INT,
        PRIMARY KEY (match_commentator_id),
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (commentator_id) REFERENCES commentators(commentator_id)
    );

CREATE TABLE
    bidding (
        bid_id INT AUTO_INCREMENT PRIMARY KEY,
        player_id INT,
        season_id INT,
        auction_price DECIMAL(10, 2),
        FOREIGN KEY (player_id) REFERENCES players(player_id),
        FOREIGN KEY (season_id) REFERENCES seasons(season_id)
    );

CREATE TABLE
    match_records (
        record_id INT AUTO_INCREMENT PRIMARY KEY,
        match_id INT,
        player_id INT,
        runs_scored INT,
        hundreds INT,
        fifties INT,
        fours INT,
        sixes INT,
        balls_faced INT,
        wickets_taken INT,
        maidens INT,
        overs DECIMAL(4, 1),
        runs_conceded INT,
        no_balls INT,
        wides INT,
        catches INT,
        stumpings INT,
        run_outs INT,
        lbw INT,
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (player_id) REFERENCES players(player_id)
    );

CREATE TABLE
    batting_statistics (
        batting_id INT AUTO_INCREMENT PRIMARY KEY,
        match_id INT,
        player_id INT,
        runs INT,
        hundreds INT,
        fifties INT,
        fours INT,
        sixes INT,
        balls_faced INT,
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (player_id) REFERENCES players(player_id)
    );

CREATE TABLE
    bowling_statistics (
        bowling_id INT AUTO_INCREMENT PRIMARY KEY,
        match_id INT,
        player_id INT,
        wickets INT,
        maidens INT,
        overs DECIMAL(4, 1),
        runs_conceded INT,
        no_balls INT,
        wides INT,
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (player_id) REFERENCES players(player_id)
    );

CREATE TABLE
    fielding_statistics (
        fielding_id INT AUTO_INCREMENT PRIMARY KEY,
        match_id INT,
        player_id INT,
        catches INT,
        run_outs INT,
        stumpings INT,
        lbw INT,
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (player_id) REFERENCES players(player_id)
    );

CREATE TABLE
    team_standings (
        standing_id INT AUTO_INCREMENT PRIMARY KEY,
        season_id INT,
        team_id INT,
        points INT,
        wins INT,
        losses INT,
        draws INT,
        net_run_rate DECIMAL(5, 2),
        FOREIGN KEY (season_id) REFERENCES seasons(season_id),
        FOREIGN KEY (team_id) REFERENCES teams(team_id)
    );

CREATE TABLE
    innings (
        innings_id INT AUTO_INCREMENT,
        match_id INT,
        batting_team_id INT,
        bowling_team_id INT,
        runs_scored INT,
        wickets_lost INT,
        overs_bowled DECIMAL(4, 1),
        PRIMARY KEY (innings_id),
        FOREIGN KEY (match_id) REFERENCES matches(match_id),
        FOREIGN KEY (batting_team_id) REFERENCES teams(team_id),
        FOREIGN KEY (bowling_team_id) REFERENCES teams(team_id)
    );

CREATE TABLE
    tournament_formats (
        format_id INT AUTO_INCREMENT PRIMARY KEY,
        season_id INT,
        format_name VARCHAR(255),
        description TEXT,
        FOREIGN KEY (season_id) REFERENCES seasons(season_id)
    );

CREATE TABLE
    match_events (
        event_id INT AUTO_INCREMENT PRIMARY KEY,
        match_id INT,
        event_description TEXT,
        event_date DATETIME,
        FOREIGN KEY (match_id) REFERENCES matches(match_id)
    );

CREATE TABLE
    users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role ENUM('user', 'admin') NOT NULL,
        email VARCHAR(255) NOT NULL,
        subscription_frequency ENUM('daily', 'weekly', 'instant') NOT NULL,
        profile_picture_url VARCHAR(255),
        full_name VARCHAR(255),
        date_of_birth DATE,
        bio TEXT,
        language_preference VARCHAR(50),
        timezone VARCHAR(50),
        allow_email_notifications BOOLEAN,
        auth_token VARCHAR(255),
        refresh_token VARCHAR(255),
        last_activity_timestamp DATETIME,
        is_active BOOLEAN DEFAULT TRUE,
        is_suspended BOOLEAN DEFAULT FALSE,
        is_banned BOOLEAN DEFAULT FALSE,
        password_reset_token VARCHAR(255),
        is_verified BOOLEAN DEFAULT FALSE,
        verification_document_url VARCHAR(255)
    );

CREATE TABLE
    transactions (
        transaction_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        transaction_date DATETIME,
        amount DECIMAL(10, 2),
        transaction_type ENUM(
            'payment',
            'refund',
            'purchase'
        ) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

CREATE TABLE
    comments (
        comment_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        match_id INT,
        comment_text TEXT,
        comment_date DATETIME,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (match_id) REFERENCES matches(match_id)
    );

CREATE TABLE
    media (
        media_id INT AUTO_INCREMENT PRIMARY KEY,
        media_type ENUM('image', 'video', 'highlight') NOT NULL,
        media_url VARCHAR(255) NOT NULL,
        description TEXT
    );

CREATE TABLE
    user_subscriptions (
        subscription_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        team_id INT,
        player_id INT,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (team_id) REFERENCES teams(team_id),
        FOREIGN KEY (player_id) REFERENCES players(player_id)
    );

CREATE TABLE
    notifications (
        notification_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        notification_type ENUM(
            'match_update',
            'news',
            'event',
            'subscription_update'
        ) NOT NULL,
        content TEXT,
        is_read BOOLEAN DEFAULT FALSE,
        created_at DATETIME,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );