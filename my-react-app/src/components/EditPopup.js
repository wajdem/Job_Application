import React, { useState } from "react";
import axios from "axios";

const UpdatePopup = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: job.jobTitle,
    description: job.description,
    applicationDeadline: job.applicationDeadline,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/jop/job-listings/${job._id}`, formData);
      onClose();
    } catch (error) {
      console.error("Error updating job listing:", error);
    }
  };

  return (
    <div className="edit-popup">
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <label>Application Deadline:</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleInputChange}
          />

          <div style={{ display: "flex", gap: "79px" }}>
            <button type="submit" className="button-student">
              Update Job
            </button>
            <button className="form_button_cancel" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePopup;
