import React from "react";

export default function TaskListCardEmpty() {
  return (
    <>
      <input
        class="form-control form-control-lg mb-2 task-list-empty"
        type="text"
        placeholder="No Task Available"
        disabled
      />
    </>
  );
}
