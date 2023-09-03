import React from 'react';

const mockData = [
    {
        id: 1,
        topic: "React for Beginners",
        consultant: "Priya Ranganathan",
        date: "2023-06-20",
        time: "2:00 PM - 3:00 PM",
        spotsLeft: 5
    },
    {
        id: 2,
        topic: "Advanced JavaScript",
        consultant: "Anand Sharma",
        date: "2023-06-25",
        time: "4:00 PM - 5:00 PM",
        spotsLeft: 3
    },
    {
        id: 3,
        topic: "Node.js Best Practices",
        consultant: "Deepak Iyer",
        date: "2023-07-02",
        time: "10:00 AM - 11:00 AM",
        spotsLeft: 4
    },
    {
        id: 4,
        topic: "Vue.js Introduction",
        consultant: "Rohini Ghosh",
        date: "2023-07-05",
        time: "11:00 AM - 12:00 PM",
        spotsLeft: 2
    },
    {
        id: 5,
        topic: "Python for Data Science",
        consultant: "Ritesh Kumar",
        date: "2023-07-10",
        time: "1:00 PM - 2:00 PM",
        spotsLeft: 5
    },
    {
        id: 6,
        topic: "Django Web Development",
        consultant: "Aditi Yadav",
        date: "2023-07-15",
        time: "2:00 PM - 3:30 PM",
        spotsLeft: 3
    },
    {
        id: 7,
        topic: "Machine Learning Basics",
        consultant: "Arjun Singh",
        date: "2023-08-01",
        time: "3:00 PM - 4:00 PM",
        spotsLeft: 1
    },
    {
        id: 8,
        topic: "Flutter for Mobile Apps",
        consultant: "Sneha Roy",
        date: "2023-08-05",
        time: "9:00 AM - 10:30 AM",
        spotsLeft: 4
    },
    {
        id: 9,
        topic: "AWS Cloud Services",
        consultant: "Aman Gupta",
        date: "2023-08-10",
        time: "4:00 PM - 5:30 PM",
        spotsLeft: 5
    },
    {
        id: 10,
        topic: "Cybersecurity Basics",
        consultant: "Manish Raj",
        date: "2023-08-20",
        time: "5:00 PM - 6:00 PM",
        spotsLeft: 3
    },
    {
        id: 11,
        topic: "Blockchain & Cryptocurrencies",
        consultant: "Vaishali Verma",
        date: "2023-08-25",
        time: "3:00 PM - 4:30 PM",
        spotsLeft: 4
    },
    {
        id: 12,
        topic: "Database Management",
        consultant: "Harish Nair",
        date: "2023-08-28",
        time: "10:00 AM - 11:00 AM",
        spotsLeft: 2
    }
];

const Consultations = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Consultations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.map(consultation => (
                    <div key={consultation.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{consultation.topic}</h2>
                        <p className="mb-2"><strong>Consultant:</strong> {consultation.consultant}</p>
                        <p className="mb-2"><strong>Date:</strong> {consultation.date}</p>
                        <p className="mb-2"><strong>Time:</strong> {consultation.time}</p>
                        <p className="mb-2"><strong>Spots Left:</strong> {consultation.spotsLeft}</p>
                        <button className="mt-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Consultations;
