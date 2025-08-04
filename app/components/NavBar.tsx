import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const NavBarComponent = () => {
  return (
    <nav className="bg-stone-600 text-3xl">
      <nav className="min-w-auto bg-darkblue shadow-2xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6 ">
            <p className=" hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/">Home</Link>
            </p>
            <p className=" hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/jobs">Jobs</Link>
            </p>
            <p className=" hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/settings">Settings</Link>
            </p>
            <p className=" hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/jobs-test">jobs test</Link>
            </p>
          </div>
          <div className="px-3 py-2 hover:text-blue-300 flex items-center space-x-2">
            <Link href="/jobs/new" className="flex items-center space-x-1">
              <span className="text-sm sm:text-base">new job</span>
              <IoMdAdd className="text-lg sm:text-xl" />
            </Link>
          </div>
          <div className=" font-bold px-3 py-2 hover:text-blue-300">
            <Link href="/user">User</Link>{" "}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavBarComponent;
