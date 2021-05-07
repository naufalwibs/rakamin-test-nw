import React, { useEffect } from "react";
import TaskListCard from "../components/TaskListCard";
import TaskListCardEmpty from "../components/TaskListCardEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  setCreateModal,
  fetchTodosList,
  updateSelectedData,
} from "../store/actions";

export default function GroupTaskCard({ todo }) {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todosReducer.dataTaskList);

  // console.log(todo);
  // console.log(taskList);

  useEffect(() => {
    dispatch(fetchTodosList(todo?.id));
  }, []);

  const showModal = () => {
    dispatch(setCreateModal(true));
    dispatch(updateSelectedData(todo?.id));
  };

  const validationTaskList = () => {
    const tempList = [];

    taskList?.forEach((task) => {
      if (task?.id_todo === todo?.id) {
        tempList.push(task);
      }
    });

    // console.log(tempList);

    if (tempList[0]?.data?.length > 0) {
      // setCurrentTaskList(tempList);
      return tempList;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="col-lg-3 container-group-task py-3 mx-2 mb-3">
        <div className="col">
          <p className="title-box text-center">{todo?.title}</p>
        </div>
        <div className="col">
          <p>{todo?.description}</p>
        </div>
        <div className="col py-3">
          {validationTaskList() ? (
            <>
              {validationTaskList()[0]?.data?.map((taskListCr) => {
                return (
                  <TaskListCard key={taskListCr.id} taskListCr={taskListCr} />
                );
              })}
            </>
          ) : (
            <TaskListCardEmpty />
          )}
        </div>
        <div className="col">
          <button className="btn btn-transparent" onClick={showModal}>
            <div onClick={showModal}>
              <i className="fas fa-plus-circle"></i> New Task
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
