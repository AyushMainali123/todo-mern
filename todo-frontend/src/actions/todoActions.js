import { TODO_SUCCESS, TODO_FAILURE, ADD_TODO, DELETE_TODO } from "../types";
import axios from "../axiosInstance";

export const getTodos = () => (dispatch) => {
  axios("/todo/")
    .then((response) => {
      let todosToBeDispatched = response.data.map((todoItem) => {
        let { user, item, description, _id: id } = todoItem;
        return { user, item, description, id };
      });
      dispatch({
        type: TODO_SUCCESS,
        payload: {
          todos: todosToBeDispatched,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: TODO_FAILURE,
        payload: {
          message: error.message
        }
      })
    });
};


export const removeTodo = (id) => (dispatch) => {
  axios.delete(`/todo/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_TODO,
        payload: {
          id
        }
    })
    })
    .catch(error => {
    alert(`${error.message}`)
  })
}