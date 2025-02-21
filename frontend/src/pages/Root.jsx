import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
function Root() {
  return (
    <div>
      {/* Navbar component is rendered here */}
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Root;
