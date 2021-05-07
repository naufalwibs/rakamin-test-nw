import React from "react";
import Sidebar from "../components/Sidebar";
import GroupTaskCard from "../components/GroupTaskCard";

export default function Main() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div id="content" className="container-fluid px-0">
          <div className="col-lg-12 py-3">
            <div className="row py-3 scrollable">
              <GroupTaskCard />
              <GroupTaskCard />
              <GroupTaskCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
