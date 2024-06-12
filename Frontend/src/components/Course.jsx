import React from "react";

function Course() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </div>
      </div>
    </>
  );
}

export default Course;
