import React, { useState } from 'react';

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
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Consultations</h1>
                <button
                    className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600"
                    onClick={() => setShowDialog(true)}>
                    Add Consultation
                </button>
            </div>
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

            {showDialog && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h2 className="text-xl font-bold mb-4">Add Consultant Details</h2>
                                <input type="text" placeholder="Consultant Name" className="w-full p-2 mb-3 border rounded" />
                                <input type="text" placeholder="Consultation Topic" className="w-full p-2 mb-3 border rounded" />
                                <input type="date" className="w-full p-2 mb-3 border rounded" />
                                <input type="time" className="w-full p-2 mb-3 border rounded" />
                                <input type="number" placeholder="Spots Left" className="w-full p-2 mb-3 border rounded" />
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowDialog(false)}
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowDialog(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Consultations;
