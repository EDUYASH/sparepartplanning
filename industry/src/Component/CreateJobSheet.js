import React, { useState } from 'react';
import axios from 'axios';

function CreateJobSheet() {
    const [formData, setFormData] = useState({
        customerName: '',
        deviceModel: '',
        issueDescription: '',
        serviceCenter: '',
        date: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Convert form data to JSON object
        const jobSheetData = {
            customerName: formData.customerName,
            deviceModel: formData.deviceModel,
            issueDescription: formData.issueDescription,
            serviceCenter: {
                centerId: formData.serviceCenter,
            },
            date: formData.date,
        };
        console.log(jobSheetData);
        // Send POST request to the API
        axios.post('http://localhost:8080/api/service-centers/create-job-sheet', jobSheetData,{mode:'no-cors'},{headers:{'Access-Control-Allow-Origin': '*','Access-Comtrol-Allow-Methods':'POST,GET,OPTIONS,PUT,DELETE','Access-Control-Allow-Headers':'Content-Type,X-Auth-Token,Origin,Authorization', "Content-Type": "application/json"}})
            .then(response => {
                console.log('Job sheet created successfully:', response.data);
                // Reset the form after successful submission
                setFormData({
                    customerName: '',
                    deviceModel: '',
                    issueDescription: '',
                    serviceCenter: '',
                    date: '',
                });
            })
            .catch(error => {
                console.error('Error creating job sheet:', error);
            });
            //     console.log(jobSheetData)

            //     let url="http://localhost:8080/api/service-centers/create-job-sheet";

            //     fetch(url, {
            //         mode: 'no-cors',
            //     method: 'POST',
            //     headers: {

            //     "Content-Type": "application/json",

            //     "Accept":"application/json"

            //     }, body: JSON.stringify(jobSheetData)

            //     }).then((result)=>{

            //     // result.json().then((resp)=>{ console.warn("resp", resp)
            //     console.log(result)

            //     // });
            // });
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create Job Sheet</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium">Customer Name</label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        className="border p-2 w-full rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Device Model</label>
                    <select
                        name="deviceModel"
                        value={formData.deviceModel}
                        onChange={handleInputChange}
                        className="border p-2 w-full rounded-md"
                    >
                        <option value="">Select device model</option>
                        <option value="Mi phone 11">Mi phone 11</option>
                        <option value="Mi band 5">Mi band 5</option>
                        <option value="Mi bluetooth speaker 6">Mi bluetooth speaker 6</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Issue Description</label>
                    <textarea
                        name="issueDescription"
                        value={formData.issueDescription}
                        onChange={handleInputChange}
                        className="border p-2 w-full rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Service Center</label>
                    <select
                        name="serviceCenter"
                        value={formData.serviceCenter}
                        onChange={handleInputChange}
                        className="border p-2 w-full rounded-md"
                    >
                        <option value="">Select service center</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="border p-2 rounded-md" />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Create Job Sheet
                </button>
            </form>
        </div>
    );
}

export default CreateJobSheet;