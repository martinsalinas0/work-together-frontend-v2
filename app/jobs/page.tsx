/* The code provided is a TypeScript React component named `JobsTestPage`. Here's a breakdown of what
the code does: */

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCardForList from "../components/JobCard";

export interface JobLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
}
export interface Job {
  jobName: string;
  jobCost: number;
  createdAt: string;
  postedBy: string;
  jobLocation: JobLocation;
  jobDeadline: string;
  jobCategory: string;
  jobBids: number;
  _id: string;
  jobStatus: string;
  forCustomer: string;
}

const JobsTestPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/all`);
        setJobs(response.data?.jobs);
      } catch (error) {
        console.error("Failed to GET from API: ", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  const handleDeleteSuccess = (id: string) => {
    setJobs((jobs) => jobs.filter((job) => job._id !== id));
  };

  if (loading) {
    return <div className="p-4 text-gray-500 text-center">Loading jobs...</div>;
  }

  if (jobs.length === 0) {
    return <div className="p-4 text-gray-700 text-center">No jobs found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Jobs</h1>
      <ul className="grid grid-cols-4 gap-6 list-none p-0">
        {jobs.map((job) => (
          <li key={job._id} className="flex justify-center">
            <JobCardForList
              jobName={job.jobName}
              jobLocation={job.jobLocation}
              jobCost={job.jobCost}
              createdAt={job.createdAt}
              jobDeadline={job.jobDeadline}
              jobCategory={job.jobCategory}
              jobID={job._id}
              onDeleteSuccess={handleDeleteSuccess}
              forCustomer={job.forCustomer}
              postedBy={job.postedBy}
              jobBids={job.jobBids}
              jobStatus={job.jobStatus}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsTestPage;
