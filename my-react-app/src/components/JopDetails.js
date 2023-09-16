import React, { useState } from "react";
import { useJopContext } from "../hooks/useJopContext";
import { useAuthContext } from "../hooks/useAuthContext";
import EditPopup from "./EditPopup";

const JopDetails = ({ jop }) => {
  const { dispatch } = useJopContext();
  const { user } = useAuthContext();

  const [editing, setEditing] = useState(false);
  const [editPopupOpen, setEditPopupOpen] = useState(false);

  const [editedJop, setEditedJop] = useState({
    jobTitle: jop.jobTitle,
    description: jop.description,
    applicationDeadline: jop.applicationDeadline,
  });

  const handleDeleteClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/jop/" + jop._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JOPS", payload: { _id: jop._id } });
    }
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditPopupOpen(true); // Open the edit pop-up
  };

  const handleSaveClick = async () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    console.log("editedJop", editedJop);
    console.log(jop._id);
    await fetch("/api/jop/" + jop._id, {
      method: "PATCH",
      body: JSON.stringify(editedJop), // Fix typo: change 'bady' to 'body'
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json", // Make sure to include the Content-Type header
      },
    });
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditPopupOpen(false); // Close the edit pop-up
    // You can handle cancellation here
  };

  // Handle input change event for editing fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedJop((prevEditedJop) => ({
      ...prevEditedJop,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="subject-details">
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Application Deadline</th>
              <th>
                <button
                  className="form_button_delete"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jop.jopTitle}</td>
              {editing ? ( // Render input fields if in editing mode
                <>
                  <td>
                    <input
                      type="text"
                      name="jobTitle"
                      value={editedJop.jobTitle}
                      onChange={handleInputChange}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{jop.jobTitle}</td>
                  <td>{jop.description}</td>
                  <td>{jop.applicationDeadline}</td>
                  <td>
                    <button
                      className="form_button_edit"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        {editPopupOpen && (
          <EditPopup
            editedJop={editedJop}
            handleInputChange={handleInputChange}
            handleSaveClick={handleSaveClick}
            handleCancelClick={handleCancelClick}
          />
        )}
      </div>
    </>
  );
};

export default JopDetails;
