import React from 'react';

const EditJobPopup = ({
  editedJobListing,
  handleInputChange,
  handleSaveClick,
  handleCancelClick,
}) => {
  return (
    <div className="edit-popup">
      <label>Job Title:</label>
      <input
        type="text"
        name="jobTitle"
        value={editedJobListing.jobTitle}
        onChange={handleInputChange}
      />
      <label>Description:</label>
      <textarea
        name="description"
        value={editedJobListing.description}
        onChange={handleInputChange}
      />
      <label>Application Deadline:</label>
      <input
        type="date"
        name="applicationDeadline"
        value={editedJobListing.applicationDeadline}
        onChange={handleInputChange}
      />
      <button className="form_button_save" onClick={handleSaveClick}>
        Save
      </button>
      <button className="form_button_cancel" onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
};

export default EditJobPopup;
