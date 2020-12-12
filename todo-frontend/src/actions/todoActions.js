import { TODO_SUCCESS, TODO_FAILURE, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";
import axios from "../axiosInstance";
export const getTodos = () => (dispatch) => {
  axios("/todo/")
    .then((response) => {
      let todosToBeDispatched = response.data.map((todoItem) => {
        let { user, item, description, _id: id } = todoItem;
        console.log("Todo", {todoItem})
        let startDate = new Date(todoItem.startDate);
        return {user, item, description, id, startDate };
      });
      dispatch({
        type: TODO_SUCCESS,
        payload: {
          todos: todosToBeDispatched,
        },
      });
    })
    .catch((error) => {
      console.log("Error")
      dispatch({
        type: TODO_FAILURE,
        payload: {
          message: error.message,
        },
      });
    });
};

export const updateTodo = (id, newValue, submitProps) => async (dispatch) => {
  const response = await axios.put(`/todo/update/${id}/`, newValue);
  const { data } = response;
  const { user, item, description, startDate } = data;
  dispatch({
    type: UPDATE_TODO,
    payload: {
      data: { user, item, description, startDate, id },
    },
  });
  submitProps.setSubmitting(false)
}

export const removeTodo = (id) => (dispatch) => {
  axios
    .delete(`/todo/${id}`)
    .then((response) => {
      console.log({ response });
      dispatch({
        type: DELETE_TODO,
        payload: {
          id,
        },
      });
    })
    .catch((error) => {
      alert(`${error.message}`);
    });
};

export const addTodo = (newTodo, submitProps) => (dispatch) => {
  console.log(newTodo.user)
  axios
    .post("/todo/add/", newTodo)
    .then((response) => {
      console.log("New Todo", response);
      const { user, item, description, startDate, _id: id } = response.data;
      dispatch({
        type: ADD_TODO,
        payload: {
          data: { user, item, description, startDate, id }, //user item description startDate
        },
      });
      submitProps.setSubmitting(false);
      submitProps.resetForm();
    })
    .catch((error) => {
      console.log("Error", error);
      submitProps.setSubmitting(false);
    });
};
