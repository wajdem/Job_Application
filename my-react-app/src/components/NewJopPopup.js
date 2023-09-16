import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const NewjopPopup = ({ onClose }) => {
  const { user } = useAuthContext();
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const jobListing = { jobTitle, description, applicationDeadline };

    const response = await fetch("/api/joblistings", {
      method: "POST",
      body: JSON.stringify(jobListing),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setJobTitle("");
      setDescription("");
      setApplicationDeadline("");
      setError(null);
      console.log("new job listing added ", json);
      onClose(); // Close the popup after successful submission
    }
  };

  return (
    <div className="edit-popup">
      <div className="popup-content">
        <label>Job Title:</label>
        <input
          type="text"
          onChange={(e) => setJobTitle(e.target.value)}
          value={jobTitle}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>Application Deadline:</label>
        <input
          type="date"
          onChange={(e) => setApplicationDeadline(e.target.value)}
          value={applicationDeadline}
        />

        <div style={{ display: "flex", gap: "79px" }}>
          <button className="button-student" onClick={handleSubmit}>
            New Job
          </button>
          {error && <div className="error">{error}</div>}
          <button className="form_button_cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewjopPopup;
