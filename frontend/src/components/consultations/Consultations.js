import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddConsultant from './AddConsultant';
import ShowConsultant from './ShowConsultant';
import EditConsultant from './EditConsultant';
import DeleteConsultant from './DeleteConsultant';
import DisplayConsultants from './DisplayConsultants';

const Consultations = () => {

    const [showEditDialog, setShowEditDialog] = useState(false);
    const [apiCalled, setApiCalled] = useState(false);
    const [consultationsData, setConsultationsData] = useState([]);

    const [newConsultation, setNewConsultation] = useState({
        consultant: "",
        topic: "",
        date: "",
        time: "",
        duration: "",
        spotsLeft: ""
    });
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL).then((response) => {
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

    const [isConfirmDialogVisible, setIsConfirmDialogVisible] = useState(false);
    const [consultationToDelete, setConsultationToDelete] = useState(null);
    const [consultationToShow, setConsultationToShow] = useState(null);
    const showConsultationDetails = (consultation) => {
        setConsultationToShow(consultation);
    };

    const [editConsultation, setEditConsultation] = useState(null);
    const openEditDialog = (consultation) => {
        setEditConsultation(consultation);
        setShowEditDialog(true);
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
            .put(`${process.env.REACT_APP_BASE_URL}/${id}`, { ...editConsultation })
            .then((response) => {
                setApiCalled(prev => !prev);
            }).catch(function (error) {
                console.log(error)
            });
        setShowEditDialog(false);
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
            <DisplayConsultants consultationsData={consultationsData}
                showConsultationDetails={showConsultationDetails}
                openEditDialog={openEditDialog}
                setConsultationToDelete={setConsultationToDelete}
                setIsConfirmDialogVisible={setIsConfirmDialogVisible}
            />

            {showCreateDialog &&
                <AddConsultant setConsultationsData={setConsultationsData}
                    newConsultation={newConsultation}
                    setNewConsultation={setNewConsultation}
                    setShowCreateDialog={setShowCreateDialog}
                    setApiCalled={setApiCalled} />}

            {isConfirmDialogVisible
                && <DeleteConsultant setIsConfirmDialogVisible={setIsConfirmDialogVisible}
                    setConsultationsData={setConsultationsData}
                    setApiCalled={setApiCalled}
                    setConsultationToDelete={setConsultationToDelete}
                    consultationToDelete={consultationToDelete} />}

            {consultationToShow
                && <ShowConsultant consultationToShow={consultationToShow}
                    showConsultationDetails={showConsultationDetails} />}

            {showEditDialog
                && <EditConsultant editConsultation={editConsultation}
                    handleInputChangeForEdit={handleInputChangeForEdit}
                    handleEditConsultation={handleEditConsultation}
                    setShowEditDialog={setShowEditDialog} />}
        </div>
    );
};

export default Consultations;