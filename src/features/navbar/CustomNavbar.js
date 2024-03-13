import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/authSlice";
import Navbar from "./Navbar";
import UserNavBar from "./UserNavBar";

function CustomNavbar() {
  const user = useSelector(selectLoggedInUser);
  return <div>{user ? <UserNavBar /> : <Navbar />}</div>;
}

export default CustomNavbar;
