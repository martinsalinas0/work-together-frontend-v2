import React from "react";
import axios from "axios";

interface MyComponentProps {
  jobName: string;
  jobCost: number;
  jobLocation: string;
  jobCompleteByDate: string;
  jobCategory: string;
  jobBids?: string;
  forCustomer: string; //create a customer type
  onDeleteSuccess?: (id: string) => void;
  jobID: string;
  createdAt: string;
  postedBy: string;
}

const JobCardForList: React.FC<MyComponentProps> = ({
  jobName,
  jobCost,

  jobLocation,
  jobCompleteByDate,
  jobCategory,
  jobBids,
  forCustomer,
  onDeleteSuccess,
  jobID,
  createdAt,
  postedBy,
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
    <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 m-4 transition hover:shadow-xl">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4 first-letter:uppercase">
        {jobName}
      </h2>

      <div className="space-y-3 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Price:</span> ${jobCost}
        </p>
        <p>
          <span className="font-medium text-gray-900">Address:</span>{" "}
          {jobLocation}
        </p>
        <p>
          <span className="font-medium text-gray-900">Deadline:</span>{" "}
          {jobCompleteByDate}
        </p>
        <p>
          <span className="font-medium text-gray-900">Category:</span>{" "}
          {jobCategory}
        </p>
        <p>
          <span className="font-medium text-gray-900"># of Bids:</span>{" "}
          {jobBids}
        </p>
        <p>
          <span className="font-medium text-gray-900">Posted by:</span>{" "}
          {postedBy}
        </p>
        <p>
          <span className="font-medium text-gray-900">Customer:</span>{" "}
          {forCustomer}
        </p>
        <p>
          <span className="font-medium text-gray-900">Posted at:</span>{" "}
          {createdAt}
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
