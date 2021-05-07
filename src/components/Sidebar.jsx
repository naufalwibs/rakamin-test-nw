import React from "react";
import RakabanLogo from "../assets/rakaban-logo.png";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("auth_token");
    history.push("/login");
  };

  const createGroupModal = () => {
    console.log("Calibri");
  };

  return (
    <>
      <nav id="sidebar">
        <div className="sidebar-header">
          <img src={RakabanLogo} alt="Logo" className="nav-logo" />
        </div>

        <ul className="list-unstyled components">
          <p>RakaBan</p>

          <li className="text-center mb-3">
            <button onClick={createGroupModal} className="btn btn-light">
              New
            </button>
          </li>
          <li className="text-center">
            <button onClick={logout} className="btn btn-light">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
