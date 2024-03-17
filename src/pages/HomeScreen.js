import React from "react";
import Navbar from "../features/navbar/Navbar";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../features/navbar/CustomNavbar";
import Footer from "../features/utils/Footer";
import Header from "../features/utils/Header";

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
