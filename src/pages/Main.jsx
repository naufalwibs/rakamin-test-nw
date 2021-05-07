import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import GroupTaskCard from "../components/GroupTaskCard";
import CreateTaskModal from "../components/CreateTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchTodos } from "../store/actions";

export default function Main() {
  const history = useHistory();
  const dispatch = useDispatch();
  const createModal = useSelector((state) => state.todosReducer.createModal);
  const editModal = useSelector((state) => state.todosReducer.editModal);
  const todos = useSelector((state) => state.todosReducer.data);

  // console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, todos]);

  if (!localStorage.auth_token) {
    history.push("/login");
  }

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div id="content" className="container-fluid px-0 scrollable">
          {createModal ? <CreateTaskModal /> : ""}
          {editModal ? <EditTaskModal /> : ""}
          <div className="col-lg-12 py-3 d-flex flex-row ">
            {todos.length > 0 ? (
              <>
                {todos.map((todo) => {
                  return <GroupTaskCard key={todo.id} todo={todo} />;
                })}
              </>
            ) : (
              <h1> Create Group Task First </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
