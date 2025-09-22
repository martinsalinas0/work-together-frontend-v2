import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const NavBarComponent = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-tight text-gray-900">
          <Link href="/">Prossfora</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/jobs"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Jobs
          </Link>
          <Link
            href="/settings"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Settings
          </Link>
          <Link
            href="/jobs-test"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Jobs Test
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <Link
            href="/jobs/new"
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium shadow hover:bg-gray-800 transition"
          >
            <span>New Job</span>
            <IoMdAdd className="text-lg" />
          </Link>

          <Link
            href="/user"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
