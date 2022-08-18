import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold">Oops!</h1>
          <div className="flex flex-row justify-center space-x-6 mt-4">
            <TbError404 className="text-7xl text-red-400" />
            <p className="mt-5 text-2xl">Page Not Found</p>
          </div>
          <Link to="/" className=" btn btn-secondary btn-lg mt-4">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
