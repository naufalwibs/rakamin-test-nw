import React from "react";

export default function TaskListCard() {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 100,
  };

  const fillerStyles = {
    height: "100%",
    width: "50%",
    backgroundColor: "white",
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 5,
    color: "black",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="col task-list mb-3">
        <p>Re design Apapun itu</p>
        <div className="three-dots-btn">
          <p>
            <strong> . . . </strong>
          </p>
        </div>
        <div className="progress-meter">
          <div style={containerStyles}>
            <div style={fillerStyles}></div>
            <span className="percentage" style={labelStyles}>
              50%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
