import React, { useEffect, useRef, useState } from 'react'

function DisplayConsultants({ consultationsData, showConsultationDetails,
    openEditDialog, setConsultationToDelete, setIsConfirmDialogVisible }) {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdownMenu = (id) => {
        setToggleDropdown(toggleDropdown === id ? null : id);
    };

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

    return (
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
    )
}

export default DisplayConsultants