-- Drop database

DROP DATABASE IPLDB;

-- Create a database for IPL

CREATE DATABASE IPLDB;

USE IPLDB;

-- Create a table for IPL teams

CREATE TABLE
    Teams (
        TeamID INT AUTO_INCREMENT PRIMARY KEY,
        TeamName VARCHAR(50) NOT NULL,
        Owner VARCHAR(50),
        Coach VARCHAR(50),
        HomeVenue VARCHAR(100),
        FoundedYear INT
    );

-- Create a table for IPL players

CREATE TABLE
    Players (
        PlayerID INT AUTO_INCREMENT PRIMARY KEY,
        TeamID INT,
        PlayerName VARCHAR(50) NOT NULL,
        Country VARCHAR(50),
        Role VARCHAR(50),
        BattingStyle VARCHAR(50),
        BowlingStyle VARCHAR(50),
        DateOfBirth DATE,
        FOREIGN KEY (TeamID) REFERENCES Teams(TeamID)
    );

-- Create a table for IPL seasons

CREATE TABLE
    Seasons (
        SeasonID INT AUTO_INCREMENT PRIMARY KEY,
        Year INT NOT NULL,
        StartDate DATE,
        EndDate DATE,
        WinnerID INT,
        FOREIGN KEY (WinnerID) REFERENCES Teams(TeamID)
    );

-- Create a table for IPL matches

CREATE TABLE
    Matches (
        MatchID INT AUTO_INCREMENT PRIMARY KEY,
        SeasonID INT,
        MatchDate DATE,
        Venue VARCHAR(100),
        FOREIGN KEY (SeasonID) REFERENCES Seasons(SeasonID)
    );

-- Create a table for player bids

CREATE TABLE
    PlayerBids (
        BidID INT AUTO_INCREMENT PRIMARY KEY,
        PlayerID INT,
        SeasonID INT,
        AuctionPrice DECIMAL(10, 2),
        FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID),
        FOREIGN KEY (SeasonID) REFERENCES Seasons(SeasonID)
    );