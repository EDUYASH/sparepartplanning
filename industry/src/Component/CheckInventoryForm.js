import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CheckInventoryForm = () => {
    const { jobId, serviceCenterId } = useParams(); // Get URL parameters

    const [formData, setFormData] = useState({
      serviceCenter: serviceCenterId,
      skuId: '',
      quantity: '',
    });

  const [inventoryData, setInventoryData] = useState(null);

  useEffect(() => {
    fetchInventoryData();
  }, [serviceCenterId]);

  const fetchInventoryData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/inventory`);
      setInventoryData(response.data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDiagnose = async () => {
    try {
      const payload = {
        [formData.skuId]: parseInt(formData.quantity) // Convert quantity to integer
      };
  
      const response = await axios.put(
        `http://localhost:8080/api/service-centers/diagnose-device/${formData.serviceCenter}`,
        payload
      );
  
      console.log(response.data); // Log the response from the API
      alert('Diagnose successful');
    } catch (error) {
      console.error('Error diagnosing device:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Diagnose Device</h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium">Service Center</label>
          <input
            type="text"
            value={formData.serviceCenter}
            readOnly
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Job Number</label>
          <input
            type="text"
            value={jobId}
            readOnly
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
  <label className="block font-medium">SKU ID</label>
  <select
    name="skuId"
    value={formData.skuId}
    onChange={handleInputChange}
    className="border p-2 w-full rounded-md"
  >
    <option value="">Select SKU ID</option>
    {inventoryData &&
      Array.from(new Set(inventoryData.map(item => item.sparePart.sku))).map(sku => (
        <option key={sku} value={sku}>
          {sku}
        </option>
      ))}
  </select>
</div>
        <div className="mb-4">
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
            min="1"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleDiagnose}
        >
          Diagnose
        </button>
      </form>
    </div>
  );
};

export default CheckInventoryForm;
