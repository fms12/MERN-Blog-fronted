import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0  bg-gray-100" />
      <div className="max-w-7xl min-w-full">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white text-[106px] font-normal">Stay curious.</span>
              {/* <span className="block text-indigo-200">customer support</span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl text-[24px] font-normal">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center ml-28">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 ">
                <Link
                  to={"/login"}
                  className="flex items-center justify-center rounded-full border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-50 sm:px-8"
                >
                  Start Reading
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
