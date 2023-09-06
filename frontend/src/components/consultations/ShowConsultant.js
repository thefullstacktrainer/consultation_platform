import React from 'react'

function ShowConsultant({ consultationToShow, showConsultationDetails }) {
    console.log("ShowConsultant called ")
    return (
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
    )
}

export default ShowConsultant