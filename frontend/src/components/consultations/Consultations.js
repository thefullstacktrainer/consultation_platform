import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:5000/api/v1/consultants";
const Consultations = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [apiCalled, setApiCalled] = useState(false);
    const [consultationsData, setConsultationsData] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            if (response.status == 202) setConsultationsData([]);
            else
                setConsultationsData(response.data);
        }).catch(function (error) {
            setConsultationsData([]);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }, [apiCalled]);
    const [newConsultation, setNewConsultation] = useState({
        consultant: "",
        topic: "",
        date: "",
        time: "",
        duration: "",
        spotsLeft: ""
    });
    const createConsultant = (newConsultation) => {
        axios
            .post(baseURL, { ...newConsultation })
            .then((response) => {
                setApiCalled(prev => !prev);
            });
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
    const deleteConsultant = (id) => {
        axios
            .delete(`${baseURL}/${id}`)
            .then((response) => {
                console.log(response)
                setApiCalled(prev => !prev);
            });
    }
    const handleDeleteConsultation = (id) => {
        setConsultationsData(prevData => prevData.filter(consultation => consultation.id !== id));
        deleteConsultant(id);
    };

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setToggleDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdownMenu = (id) => {
        setToggleDropdown(toggleDropdown === id ? null : id);
    };

    const [isConfirmDialogVisible, setIsConfirmDialogVisible] = useState(false);
    const [consultationToDelete, setConsultationToDelete] = useState(null);

    const confirmDeleteConsultation = () => {
        if (consultationToDelete !== null) {
            handleDeleteConsultation(consultationToDelete);
            setConsultationToDelete(null);
            setIsConfirmDialogVisible(false);
        }
    };

    const [consultationToShow, setConsultationToShow] = useState(null);
    const showConsultationDetails = (consultation) => {
        setConsultationToShow(consultation);
    };

    const [editConsultation, setEditConsultation] = useState(null);
    const openEditDialog = (consultation) => {
        setEditConsultation(consultation);
        setShowDialog(true);
    };
    const handleInputChangeForEdit = (e) => {
        const { name, value } = e.target;
        setEditConsultation((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditConsultation = (id) => {
        setConsultationsData((prevData) => {
            return prevData.map((consultation) => {
                if (consultation.id === editConsultation.id) {
                    return editConsultation;
                } else {
                    return consultation;
                }
            });
        });
        axios
            .put(`${baseURL}/${id}`, { ...editConsultation })
            .then((response) => {
                setApiCalled(prev => !prev);
            });
        setShowDialog(false);
    };

    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const addNewConsultant = () => {
        setShowCreateDialog(true);
        setNewConsultation({
            consultant: "",
            topic: "",
            date: "",
            time: "",
            spotsLeft: ""
        });
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Consultations</h1>
                <button
                    className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600"
                    onClick={addNewConsultant}>
                    Add Consultation
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {consultationsData.map((consultation, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex">
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{consultation.topic}</h2>
                            <p className="mb-2"><strong>Consultant:</strong> {consultation.consultant}</p>
                            <p className="mb-2"><strong>Date:</strong> {consultation.date}</p>
                            <p className="mb-2"><strong>Time:</strong> {consultation.time}</p>
                            <p className="mb-2"><strong>Duration:</strong> {consultation.duration}</p>
                            <p className="mb-2"><strong>Spots Left:</strong> {consultation.spotsLeft}</p>
                            <button className="mt-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600">
                                Book Now
                            </button>
                        </div>
                        <div className="relative flex items-start">
                            <button className="text-gray-500" onClick={() => toggleDropdownMenu(consultation.id)}>
                                ...
                            </button>
                            {toggleDropdown === consultation.id && (
                                <div ref={dropdownRef} className="dropdown absolute right-0 bg-white border border-gray-200 rounded mt-2 shadow-lg">
                                    <button
                                        className="block px-4 py-2"
                                        onClick={() => {
                                            showConsultationDetails(consultation);
                                            setToggleDropdown(false);
                                        }}
                                    >
                                        Show
                                    </button>

                                    <button className="block px-4 py-2" onClick={() => {
                                        openEditDialog(consultation);
                                        setToggleDropdown(false);
                                    }}
                                    >Edit</button>

                                    <button
                                        className="block px-4 py-2"
                                        onClick={() => {
                                            setConsultationToDelete(consultation.id);
                                            setIsConfirmDialogVisible(true);
                                            setToggleDropdown(false);
                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {showCreateDialog && (
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
            )}

            {isConfirmDialogVisible && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Delete Consultation
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to delete this consultation? This action cannot be undone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={confirmDeleteConsultation}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setIsConfirmDialogVisible(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {consultationToShow && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {consultationToShow.topic}
                                </h3>
                                <div className="mt-2">
                                    <p><strong>Consultant:</strong> {consultationToShow.consultant}</p>
                                    <p><strong>Date:</strong> {consultationToShow.date}</p>
                                    <p><strong>Time:</strong> {consultationToShow.time}</p>
                                    <p><strong>Duration:</strong> {consultationToShow.duration}</p>
                                    <p><strong>Spots Left:</strong> {consultationToShow.spotsLeft}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => showConsultationDetails(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showDialog && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h2 className="text-xl font-bold mb-4">Edit Consultation</h2>
                                <input
                                    type="text"
                                    placeholder="Consultant Name"
                                    name="consultant"
                                    value={editConsultation.consultant}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Consultation Topic"
                                    name="topic"
                                    value={editConsultation.topic}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={editConsultation.date}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={editConsultation.time}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                />
                                <input
                                    type="number"
                                    name="duration"
                                    value={editConsultation.duration}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                    placeholder="Duration (e.g., 1 hour)"
                                />
                                <input
                                    type="number"
                                    placeholder="Spots Left"
                                    name="spotsLeft"
                                    value={editConsultation.spotsLeft}
                                    onChange={handleInputChangeForEdit}
                                    className="w-full p-2 mb-3 border rounded"
                                />
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => handleEditConsultation(editConsultation.id)}
                                >
                                    Save
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
