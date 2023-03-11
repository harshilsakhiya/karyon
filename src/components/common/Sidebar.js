import React from "react";
import { Link } from "react-router-dom";
import { SidebarState } from "../../atom/sidebar";
import {useAtom} from "jotai"

export default function Sidebar() {

  const [category, setCategory] = useAtom(SidebarState);

  const SelectMenu = (data) => {
    setCategory(data.target.innerText);
  };

  return (
    <div className="fixed  bg-secondary  text-white vh-100 ">
      <div className="p-3">
        <h3 className="border-bottom p-1">Logo</h3>
        <div className="mt-5" onClick={SelectMenu}>
          <Link to="/dashboard">
            {" "}
            <p
              className={
                category === "dashboard" && "bg-warning p-3 border rounded"
              }
            >
              dashboard
            </p>{" "}
          </Link>
          <Link to="/live-tracking">
            {" "}
            <p
              className={
                category === "live-tracking" &&
                "bg-warning p-3 border rounded"
              }
            >
              live-tracking
            </p>{" "}
          </Link>

          <Link to="/trip">
            {" "}
            <p
              className={
                category === "trip" && "bg-warning p-3 border rounded"
              }
            >
              trip
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
