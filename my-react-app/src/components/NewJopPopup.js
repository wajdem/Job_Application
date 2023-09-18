import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const NewjopPopup = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/jop/job-listings", {
        jobTitle,
        description,
        applicationDeadline,
      });
    } catch (error) {
      console.error("Error creating job listing:", error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="edit-popup">
      <div className="popup-content">
        <label>Job Title:</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Application Deadline:</label>
        <input
          type="date"
          value={applicationDeadline}
          onChange={(e) => setApplicationDeadline(e.target.value)}
        />

        <div style={{ display: "flex", gap: "79px" }}>
          <button className="button-student" onClick={handleSubmit}>
            New Job
          </button>
          <button className="form_button_cancel" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewjopPopup;
