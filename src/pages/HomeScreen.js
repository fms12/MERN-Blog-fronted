import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../features/navbar/CustomNavbar";

function HomeScreen() {
  return (
    <div className="">
      <CustomNavbar />
      <div className="relative overflow-hidden pb-32 pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeScreen;
