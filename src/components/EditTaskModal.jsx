import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEditModal } from "../store/actions";

export default function EditTaskModal() {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState("");

  const closeModal = () => {
    dispatch(setEditModal(false));
  };

  return (
    <>
      <div className="container">
        <div className="overlay" id="add-task">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Task Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex: Beat elon musk company"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Progress</label>
                    <input
                      type="text"
                      className="form-control create-modal"
                      placeholder="ex: 75%"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
