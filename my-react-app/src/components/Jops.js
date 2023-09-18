// JobListPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdatePopup from "./EditPopup";

const JobListPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/jop/all-job-listings");
        setJobListings(response.data);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/jop/job-listings/${id}`);
      setJobListings(prevListings => prevListings.filter(job => job._id !== id));
    } catch (error) {
      console.error("Error deleting job listing:", error);
    }
  };

  const handleUpdate = (job) => {
    setSelectedJob(job);
  };

  const handleCloseUpdatePopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="subject-details">
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Description</th>
            <th>Application Deadline</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((job) => (
            <tr key={job._id}>
              <td>{job.jobTitle}</td>
              <td>{job.description}</td>
              <td>{job.applicationDeadline}</td>
              <td>
                <button
                  className="button"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => handleUpdate(job)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedJob && (
        <UpdatePopup
          job={selectedJob}
          onClose={handleCloseUpdatePopup}
        />
      )}
    </div>
  );
};

export default JobListPage;
