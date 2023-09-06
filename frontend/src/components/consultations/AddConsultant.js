import React from 'react'
import axios from 'axios'
import process from 'process';

function AddConsultant({ setConsultationsData, setShowCreateDialog,
    setNewConsultation, newConsultation, setApiCalled }) {

    const createConsultant = (newConsultation) => {
        axios
            .post(process.env.REACT_APP_BASE_URL, { ...newConsultation })
            .then((response) => {
                setApiCalled(prev => !prev);
            }).catch(function (error) {
                console.log(error)
            })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewConsultation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddConsultation = () => {
        createConsultant(newConsultation);
        setConsultationsData(prevData => [...prevData, newConsultation]);
        setNewConsultation({
            consultant: "",
            topic: "",
            date: "",
            time: "",
            duration: "",
            spotsLeft: ""
        });
        setShowCreateDialog(false);
    };
    console.log("AddConsultant called ")
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h2 className="text-xl font-bold mb-4">Add Consultant Details</h2>
                        <input
                            type="text"
                            placeholder="Consultant Name"
                            name="consultant"
                            value={newConsultation.consultant}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Consultation Topic"
                            name="topic"
                            value={newConsultation.topic}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                        />
                        <input
                            type="date"
                            name="date"
                            value={newConsultation.date}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                        />
                        <input
                            type="time"
                            name="time"
                            value={newConsultation.time}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                        />
                        <input
                            type="number"
                            name="duration"
                            value={newConsultation.duration}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                            placeholder="Duration (e.g., 1 hour)"
                        />
                        <input
                            type="number"
                            placeholder="Spots Left"
                            name="spotsLeft"
                            value={newConsultation.spotsLeft}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-3 border rounded"
                        />
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleAddConsultation}
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowCreateDialog(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddConsultant