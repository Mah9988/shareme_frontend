import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Feed from "../components/feed/Feed";
import CreatePin from "../components/createPin/CreatePin";
import Search from "../components/search/Search";
import PinDetails from "../components/pinDetails/PinDetails";

const Pins: React.FC<any> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
        <div className="">
          <Outlet />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route
              path="/pin-detail/:pinId"
              element={<PinDetails user={user && user} />}
            />
            <Route
              path="/create-pin"
              element={<CreatePin user={user && user} />}
            />
            <Route
              path="/search"
              element={
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Pins;
