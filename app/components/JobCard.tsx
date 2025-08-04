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
    <div className="border-4 p-4 w-72 grid gap-1 bg-stone-200 border-stone-200 shadow-xl rounded-2xl m-4">
      <h2 className="text-center text-2xl font-bold mb-4">{jobName}</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Price: </span> <span>${jobCost}</span>
        </p>

        <p>
          <span className="font-medium">Address: </span> {jobLocation}
        </p>
        <p>
          <span className="font-medium">Deadline: </span> {jobCompleteByDate}
        </p>
        <p>
          <span className="font-medium">Category </span> {jobCategory}
        </p>
        <p>
          <span className="font-medium"># of bids</span> {jobBids}
        </p>

        <p>
          <span className="font-medium">person who posted: </span> {postedBy}
        </p>
        <p>
          <span className="font-medium">CustomerName </span> {forCustomer}
        </p>
        <p>
          <span className="font-medium">Posted At: </span> {createdAt}
        </p>

        <div className="m-2 justify-center flex">
          <button
            type="button"
            className="m-3 p-1 bg-blue-400 rounded hover:bg-blue-700 transition hover:cursor-pointer"
          >
            view
          </button>
          <button
            type="button"
            className="m-3 p-1 bg-red-400 rounded hover:bg-red-700 transition hover:cursor-pointer"
            onClick={deleteClick}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardForList;
