import React from "react";
import list from "../../public/list.json";
function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-2 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
}

export default FreeBook;
