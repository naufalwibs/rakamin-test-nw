import React from "react";
import TaskListCard from "../components/TaskListCard";
import TaskListCardEmpty from "../components/TaskListCardEmpty";

export default function GroupTask() {
  return (
    <>
      <div className="col-lg-3 container-group-task py-3 mx-2 mb-3">
        <div className="col">
          <p className="title-box text-center">Group Task 1</p>
        </div>
        <div className="col">
          <p>January - March</p>
        </div>
        <div className="col py-3">
          <TaskListCard />
          <TaskListCard />
          {/* <TaskListCardEmpty /> */}
        </div>
        <div className="col">
          <button className="btn btn-dark">
            <i class="fas fa-plus-circle"></i> New Task
          </button>
        </div>
      </div>
    </>
  );
}
