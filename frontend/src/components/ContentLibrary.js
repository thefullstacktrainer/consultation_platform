import React from 'react';

const mockData = [
    {
        id: 1,
        title: "React Basics",
        description: "Getting started with React.",
        author: "Aarav Kumar",
        date: "2023-01-15"
    },
    {
        id: 2,
        title: "Node.js Essentials",
        description: "Backend development with Node.js.",
        author: "Diya Patel",
        date: "2023-02-05"
    },
    {
        id: 3,
        title: "Vue.js for Beginners",
        description: "A beginner's guide to Vue.js.",
        author: "Ishaan Verma",
        date: "2023-02-20"
    },
    {
        id: 4,
        title: "Advanced Angular Topics",
        description: "Diving deeper into Angular.",
        author: "Priyanka Mehta",
        date: "2023-03-05"
    },
    {
        id: 5,
        title: "Web Design Fundamentals",
        description: "Foundations of a good web design.",
        author: "Rohan Gupta",
        date: "2023-03-15"
    },
    {
        id: 6,
        title: "Python for Data Analysis",
        description: "Harnessing the power of Python in data analytics.",
        author: "Ritika Singh",
        date: "2023-03-28"
    },
    {
        id: 7,
        title: "Getting Started with Django",
        description: "Building web apps using Django framework.",
        author: "Aditya Sharma",
        date: "2023-04-10"
    },
    {
        id: 8,
        title: "Mastering Machine Learning",
        description: "A deep dive into the world of ML algorithms.",
        author: "Kavya Iyer",
        date: "2023-04-22"
    },
    {
        id: 9,
        title: "Digital Marketing 101",
        description: "Strategies and tips for successful digital marketing.",
        author: "Mohit Agarwal",
        date: "2023-05-05"
    },
    {
        id: 10,
        title: "The Future of Web3 & Blockchain",
        description: "Exploring decentralized web and the blockchain revolution.",
        author: "Ananya Joshi",
        date: "2023-05-18"
    }
];

const ContentLibrary = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Content Library</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockData.map(content => (
                    <div key={content.id} className="border rounded p-4 shadow-lg">
                        <h2 className="text-xl mb-2">{content.title}</h2>
                        <p className="text-gray-600">{content.description}</p>
                        <div className="text-sm text-gray-500 mt-2">
                            <span>By: {content.author}</span>
                            <span className="block mt-2">Date: {content.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentLibrary;
