import React from 'react'
import axios from 'axios'

function DeleteConsultant({ setConsultationsData, setIsConfirmDialogVisible,
    setApiCalled, setConsultationToDelete, consultationToDelete }) {
    const deleteConsultant = (id) => {
        axios
            .delete(`${process.env.REACT_APP_BASE_URL}/${id}`)
            .then((response) => {
                console.log(response)
                setApiCalled(prev => !prev);
            }).catch(function (error) {
                console.log(error)
                setApiCalled(prev => !prev);
            });
    }
    const handleDeleteConsultation = (id) => {
        setConsultationsData(prevData => prevData.filter(consultation => consultation.id !== id));
        deleteConsultant(id);
    };
    const confirmDeleteConsultation = () => {
        if (consultationToDelete !== null) {
            handleDeleteConsultation(consultationToDelete);
            setConsultationToDelete(null);
            setIsConfirmDialogVisible(false);
        }
    };

    return (
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
    )
}

export default DeleteConsultant