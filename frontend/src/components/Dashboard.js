import React from 'react';

const userData = [
    { "id": 1, "name": "Amit Sharma", "lastLogin": "2023-04-01", "status": "Active", "city": "Mumbai" },
    { "id": 2, "name": "Priya Singh", "lastLogin": "2023-03-29", "status": "Inactive", "city": "Delhi" },
    { "id": 3, "name": "Rohan Mehta", "lastLogin": "2023-03-28", "status": "Active", "city": "Bangalore" },
    { "id": 4, "name": "Nisha Yadav", "lastLogin": "2023-04-05", "status": "Active", "city": "Kolkata" },
    { "id": 5, "name": "Vikas Reddy", "lastLogin": "2023-03-25", "status": "Inactive", "city": "Hyderabad" },
    { "id": 6, "name": "Meera Kapoor", "lastLogin": "2023-03-30", "status": "Active", "city": "Chennai" },
    { "id": 7, "name": "Karan Bajaj", "lastLogin": "2023-04-02", "status": "Active", "city": "Pune" },
    { "id": 8, "name": "Isha Gupta", "lastLogin": "2023-04-04", "status": "Active", "city": "Lucknow" },
    { "id": 9, "name": "Manoj Kumar", "lastLogin": "2023-03-26", "status": "Inactive", "city": "Jaipur" },
    { "id": 10, "name": "Sakshi Malik", "lastLogin": "2023-04-03", "status": "Active", "city": "Chandigarh" }
];

const contentData = [
    { "title": "Indian Festivals 2023", "views": 1200 },
    { "title": "Best Places to Visit in India", "views": 900 },
    { "title": "Indian Cuisines: A Journey", "views": 750 },
    { "title": "Yoga: India's Gift to the World", "views": 1100 },
    { "title": "Bollywood: Behind the Scenes", "views": 980 },
    { "title": "Indian Classical Music Basics", "views": 850 },
    { "title": "The Indian Startup Ecosystem", "views": 950 },
    { "title": "Indian Literature: Classics to Modern", "views": 690 },
    { "title": "Exploring the Himalayas", "views": 720 },
    { "title": "The Spirituality of India", "views": 640 }
];

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

            {/* User Data */}
            <div className="mb-8">
                <h2 className="text-xl mb-4">Recent Users</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Last Login</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user => (
                            <tr key={user.id}>
                                <td className="border py-2 px-4">{user.name}</td>
                                <td className="border py-2 px-4">{user.lastLogin}</td>
                                <td className="border py-2 px-4">{user.status}</td>
                                <td className="border py-2 px-4">{user.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Content Data */}
            <div className="mb-8">
                <h2 className="text-xl mb-4">Top Content by Views</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">Title</th>
                            <th className="py-2 px-4">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentData.map(content => (
                            <tr key={content.title}>
                                <td className="border py-2 px-4">{content.title}</td>
                                <td className="border py-2 px-4">{content.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;