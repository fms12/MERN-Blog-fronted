import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../features/navbar/CustomNavbar";
import Footer from "../features/utils/Footer";

function HomeScreen() {
  return (
    <div className="">
      <CustomNavbar />
      <div className="relative overflow-hidden pb-32">
        <Outlet />
      </div>
        <Footer />
    </div>
  );
}

export default HomeScreen;
