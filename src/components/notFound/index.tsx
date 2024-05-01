import React from "react";
import { Link } from "react-router-dom";

import notFoundImage from "../../assets/notFound.jpg";
const index = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mt-5">
      <div className="flex flex-col justify-center items-center">
        <img
          src={notFoundImage}
          alt="not-found"
          className="rounded-lg w-300 max-w-3xl mb-5"
        />
        <h1 className="text-lg font-bold text-black mb-5 notFoundText">
          Page Not Found Or You Not Authorized
        </h1>
        <Link
          to="/login"
          className="px-6 py-3 text-white no-underline bg-[#ffc801] rounded  hover:underline hover:text-yellow-100"
        >
          Return To Login
        </Link>
      </div>
    </div>
  );
};

export default index;
