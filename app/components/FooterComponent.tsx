import React from "react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-darkblue text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white">WorkKwik</h2>
          <p className="mt-2 text-sm text-gray-400">
            Simplifying workflows with speed and clarity. Built to keep teams
            moving forward.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/home"
                className="hover:text-orange-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/welcome"
                className="hover:text-orange-300 transition-colors"
              >
                Welcome
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className="hover:text-orange-300 transition-colors" 
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="hover:text-orange-300 transition-colors"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/user"
                className="hover:text-orange-300 transition-colors"
              >
                User
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm text-gray-400">support@prossfora.com</p>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} ProssFora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
