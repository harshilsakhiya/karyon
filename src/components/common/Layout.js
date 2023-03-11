import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="d-flex col-12 justify-content-between">
      <div className="w-100">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
}
