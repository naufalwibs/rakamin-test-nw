const initialState = {
  data: [],
  dataTaskList: [],
  selectedData: {},
  error: null,
  isLoading: false,
  createGroupModal: false,
  createModal: false,
  editModal: false,
};

const todosReducer = (state = initialState, { type, payload }) => {
  if (type === "todos/fetch") {
    return {
      ...state,
      data: payload,
    };
  }

  if (type === "todos/dataTaskList") {
    return {
      ...state,
      dataTaskList: [...state.dataTaskList, payload],
    };
  }

  if (type === "todos/selectData") {
    return {
      ...state,
      selectedData: payload,
    };
  }

  if (type === "todos/error") {
    return {
      ...state,
      error: payload,
    };
  }

  if (type === "todos/isLoading") {
    return {
      ...state,
      isLoading: payload,
    };
  }

  if (type === "todos/createGroupModal") {
    return {
      ...state,
      createGroupModal: payload,
    };
  }

  if (type === "todos/createModal") {
    return {
      ...state,
      createModal: payload,
    };
  }

  if (type === "todos/editModal") {
    return {
      ...state,
      editModal: payload,
    };
  }

  return state;
};

export default todosReducer;
