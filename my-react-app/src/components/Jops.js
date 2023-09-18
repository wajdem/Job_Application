// JobListPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdatePopup from "./EditPopup";

const JobListPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobApplicants, setJobApplicants] = useState([]);

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
      setJobListings((prevListings) =>
        prevListings.filter((job) => job._id !== id)
      );
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

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get("/api/jop/jops");
        setJobApplicants(response.data);
      } catch (error) {
        console.error("Error fetching job applicants:", error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <>
      <h1>Available jobs</h1>
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
                  <button className="button" onClick={() => handleUpdate(job)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedJob && (
          <UpdatePopup job={selectedJob} onClose={handleCloseUpdatePopup} />
        )}
      </div>

      <h1>Employment applications</h1>
      <div className="subject-details">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Contact In Formation</th>
              <th>Experience</th>
              <th>Education</th>
              <th>Additiona lI nformation</th>
            </tr>
          </thead>
          <tbody>
            {jobApplicants.map((applicant) => (
              <tr key={applicant._id}>
                <td>{applicant.name}</td>
                <td>{applicant.address}</td>
                <td>{applicant.gender}</td>
                <td>{applicant.age}</td>
                <td>{applicant.contactInformation}</td>
                <td>{applicant.yearsOfExperience}</td>
                <td>{applicant.educationInformation}</td>
                <td>{applicant.additionalInformation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobListPage;
