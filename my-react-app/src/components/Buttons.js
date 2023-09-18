import React, { useState } from "react";
import NewJobPopup from "./NewJopPopup"; // Corrected import statement

const Buttons = () => {
  const [showJopPopup, setShowJopPopup] = useState(false);

  const handleNewJopClick = () => {
    setShowJopPopup(true);
  };

  const handleClosePopup = () => {
    setShowJopPopup(false);
  };

  return (
    <div className="four_buttons">
      <button className="button-student" onClick={handleNewJopClick}>
        New Jop
      </button>
      {showJopPopup && <NewJobPopup onClose={handleClosePopup} />} {/* Corrected component name */}
      <button className="button-student">Requests Jop</button>
    </div>
  );
};

export default Buttons;
