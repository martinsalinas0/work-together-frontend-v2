import React from "react";
import axios from "axios";

interface JobLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
}
interface MyComponentProps {
  jobName: string;
  jobCost: number;
  createdAt: string;
  postedBy: string;
  jobLocation: JobLocation;
  jobDeadline: string;
  jobCategory: string;
  jobBids?: number;
  jobID: string;
  forCustomer: string; //create a customer type
  jobStatus: string;
  onDeleteSuccess?: (id: string) => void;
}

const JobCardForList: React.FC<MyComponentProps> = ({
  jobName,
  jobCost,
  createdAt,
  postedBy,
  jobLocation,
  jobDeadline,
  jobCategory,
  jobBids,
  jobID,
  forCustomer,
  jobStatus,
  onDeleteSuccess,
}) => {
  const deleteClick = async () => {
    if (confirm(`are you sure you want to delete ${jobName}?`)) {
      try {
        await axios.delete(`http://localhost:8000/api/jobs/delete/${jobID}`);
        alert("Job deleted successfully");
        onDeleteSuccess?.(jobID);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data?.message || "Failed to delete job");
        } else {
          alert("Failed to delete job");
        }
      }
    }
  };
  return (
    <div className="w-full h-[450px] bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col">
      <h2
        className="text-center text-2xl font-semibold text-gray-800 mb-4 first-letter:uppercase truncate"
        title={jobName}
      >
        {jobName}
      </h2>

      <div className="flex-grow space-y-2 text-sm text-gray-700 overflow-hidden">
        <p className="truncate">
          <span className="font-medium text-gray-900">Price:</span> ${jobCost}
        </p>
        <p className="truncate">
          Date Listed:{" "}
          {new Date(createdAt).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="truncate">
          <span className="font-medium text-gray-900">Posted by:</span>{" "}
          {postedBy}
        </p>
        <span className="truncate">
          <span className="font-medium text-gray-900">Address:</span>{" "}
          <p className="text-xs">{`${jobLocation.street}, ${jobLocation.city},${jobLocation.state} `}</p>
          <p className="text-xs">{`${jobLocation.zipcode}`}</p>
        </span>
        <p className="truncate">
          <span className="font-medium text-gray-900">Deadline:</span>{" "}
          {jobDeadline}
        </p>
        <p className="truncate">
          <span className="font-medium text-gray-900">Category:</span>{" "}
          {jobCategory}
        </p>
        <p className="truncate">
          <span className="font-medium text-gray-900"># of Bids:</span>{" "}
          {jobBids ?? 0}
        </p>
        <p className="truncate">
          <span className="font-medium text-gray-900">Customer:</span>{" "}
          {forCustomer}
        </p>
        <p className="truncate">
          <span className="font-medium text-gray-900">Status:</span> {jobStatus}
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="px-4 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          View
        </button>
        <button
          type="button"
          onClick={deleteClick}
          className="px-4 py-1.5 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCardForList;
