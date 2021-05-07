import axios from "../axios/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function setCreateModal(payload) {
  return (dispatch, getState) => {
    dispatch({ type: "todos/createModal", payload });
  };
}

export function setEditModal(payload) {
  return (dispatch, getState) => {
    dispatch({ type: "todos/editModal", payload });
  };
}

export function userLogin(payload) {
  return (dispatch, getState) => {
    // console.log(payload);
    dispatch({ type: "todos/isLoading", payload: true });
    axios
      .post("auth/login", payload)
      .then(({ data }) => {
        MySwal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: "Login Success!",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        localStorage.setItem("auth_token", data.auth_token);
      })
      .catch((err) => {
        dispatch({ type: "todos/error", payload: err });
        MySwal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "error",
          title: "Login Failed!",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      })
      .finally((_) => {
        dispatch({ type: "todos/isLoading", payload: false });
      });
  };
}

export function userRegister(payload) {
  return (dispatch, getState) => {
    // console.log(payload);
    dispatch({ type: "todos/isLoading", payload: true });
    axios
      .post("signup", payload)
      .then(({ data }) => {
        console.log(data);
        MySwal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: `${data.message}`,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        localStorage.setItem("auth_token", data.auth_token);
      })
      .catch((err) => {
        dispatch({ type: "todos/error", payload: err });
        MySwal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "error",
          title: "Register Failed!",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      })
      .finally((_) => {
        dispatch({ type: "todos/isLoading", payload: false });
      });
  };
}

export function fetchTodos(payload) {
  return (dispatch, getState) => {
    axios.defaults.headers.common["Authorization"] = localStorage.auth_token;
    // console.log(localStorage.auth_token);
    dispatch({ type: "todos/isLoading", payload: true });
    axios("todos")
      .then(({ data }) => {
        // console.log(data);
        dispatch({ type: "todos/fetch", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "todos/error", payload: err });
      })
      .finally((_) => {
        dispatch({ type: "todos/isLoading", payload: false });
      });
  };
}

export function fetchTodosList(payload) {
  return (dispatch, getState) => {
    axios.defaults.headers.common["Authorization"] = localStorage.auth_token;
    dispatch({ type: "todos/isLoading", payload: true });
    axios(`todos/${payload}/items`)
      .then(({ data }) => {
        dispatch({
          type: "todos/dataTaskList",
          payload: { id_todo: payload, data },
        });
      })
      .catch((err) => {
        dispatch({ type: "todos/error", payload: err });
      })
      .finally((_) => {
        dispatch({ type: "todos/isLoading", payload: false });
      });
  };
}

export function updateSelectedData(payload) {
  return (dispatch, getState) => {
    const state = getState().todosReducer.data;
    // console.log(payload);
    // console.log(state);
    const findTodo = state.find((todo) => todo.id === payload);
    // console.log(findTodo);
    dispatch({ type: "todos/selectData", payload: findTodo });
  };
}

export function createTaskBySelectedData(payload) {
  return (dispatch, getState) => {
    // console.log(payload);
    axios.defaults.headers.common["Authorization"] = localStorage.auth_token;
    const group = getState().todosReducer.selectedData;
    // const list = getState().todosReducer.dataTaskList;
    // console.log(group);
    // console.log(list);
    // const createdTaskListById = list.find((el) => el.id_todo === group.id);
    // console.log(createdTaskListById);

    axios
      .post(`/todos/${group.id}/items`, payload)
      .then(({ data }) => {
        console.log(data);
      })
      .then(() => {
        dispatch({ type: "todos/isLoading", payload: true });
        axios(`todos/${group.id}/items`)
          .then(({ data }) => {
            dispatch({
              type: "todos/dataTaskList",
              payload: { id_todo: payload, data },
            });
          })
          .catch((err) => {
            dispatch({ type: "todos/error", payload: err });
          })
          .finally((_) => {
            dispatch({ type: "todos/isLoading", payload: false });
          });
      })
      .catch((err) => console.log(err));
  };
}
