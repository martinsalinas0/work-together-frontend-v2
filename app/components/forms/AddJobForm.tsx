"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface JobFormData {
  jobName: string;
  jobCost: number;
  postedBy: string;
  jobLocation: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  jobDeadline: string;
  jobCategory: string;
  forCustomer: string;
  jobDescription: string;
  jobNotes?: string;
  jobStatus: string;
  jobBids: number;
}

const AddJobForm: React.FC = () => {
  const [formData, setFormData] = useState<JobFormData>({
    jobName: "",
    jobCost: 0,
    postedBy: "",
    jobLocation: { street: "", city: "", state: "", zipcode: "" },
    jobDeadline: "",
    jobCategory: "",
    forCustomer: "",
    jobDescription: "",
    jobNotes: "",
    jobStatus: "New Job",
    jobBids: 1,
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // handle nested jobLocation fields
    if (name in formData.jobLocation) {
      setFormData((prev) => ({
        ...prev,
        jobLocation: { ...prev.jobLocation, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/jobs/new",
        formData
      );

      if (res.data.success) {
        alert("Job created successfully!");
        setFormData({
          jobName: "",
          jobCost: 0,
          postedBy: "",
          jobLocation: { street: "", city: "", state: "", zipcode: "" },
          jobDeadline: "",
          jobCategory: "",
          forCustomer: "",
          jobDescription: "",
          jobNotes: "",
          jobStatus: "new Job",
          jobBids: 1,
        });
      } else {
        alert(`❌ Error: ${res.data.message}`);
      }
    } catch (err: unknown) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        alert(
          `⚠️ Failed to create job: ${
            err.response?.data?.message || err.message
          }`
        );
      } else if (err instanceof Error) {
        alert(`⚠️ Failed to create job: ${err.message}`);
      } else {
        alert("⚠️ Failed to create job: Unknown error");
      }
    }
    router.push("/jobs");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Add New Job</h2>

      {/* Job Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Job Name
        </label>
        <input
          type="text"
          name="jobName"
          value={formData.jobName}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Job Cost */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Job Cost
        </label>
        <input
          type="number"
          name="jobCost"
          value={formData.jobCost}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Posted By */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Posted By
        </label>
        <input
          type="text"
          name="postedBy"
          value={formData.postedBy}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Job Location */}
      <fieldset className="grid grid-cols-2 gap-4">
        <legend className="text-sm font-medium text-gray-700">
          Job Location
        </legend>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.jobLocation.street}
          onChange={handleChange}
          className="col-span-2 mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.jobLocation.city}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.jobLocation.state}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          required
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          value={formData.jobLocation.zipcode}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          required
        />
      </fieldset>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Deadline
        </label>
        <input
          type="date"
          name="jobDeadline"
          value={formData.jobDeadline}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="jobCategory"
          value={formData.jobCategory}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Select category</option>
          <option value="landscape">landscape</option>
          <option value="plumbing">plumbing</option>
          <option value="electrical">electrical</option>
          <option value="remodel">Remodel</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          For Customer
        </label>
        <input
          type="text"
          name="forCustomer"
          value={formData.forCustomer}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          rows={3}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          name="jobNotes"
          value={formData.jobNotes}
          onChange={handleChange}
          rows={2}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
      >
        Create Job
      </button>
    </form>
  );
};

export default AddJobForm;
