import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCreateModal, createTaskBySelectedData } from "../store/actions";

export default function CreateTaskModal() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    progress_percentage: 0,
  });

  const closeModal = () => {
    dispatch(setCreateModal(false));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === "progress_percentage") {
      setValues({
        ...values,
        [name]: +value,
      });
    }
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!values.name) {
      console.log("cannot empty");
    } else if (
      values.progress_percentage > 100 ||
      values.progress_percentage < 0 ||
      !values.progress_percentage
    ) {
      console.log("Insert Valid Only");
    }
    dispatch(createTaskBySelectedData(values));
  };

  return (
    <>
      <div className="container">
        <div className="overlay" id="add-task">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Task</h5>
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
                      value={values.name}
                      onChange={handleInputChange}
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="ex: Beat elon musk company"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Progress</label>
                    <input
                      value={values.progress_percentage}
                      onChange={handleInputChange}
                      name="progress_percentage"
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
                <button
                  onClick={(event) => saveTask(event)}
                  type="button"
                  className="btn btn-primary"
                >
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
