import { TODO_SUCCESS, TODO_FAILURE, ADD_TODO } from "../types";
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
      console.log(error.message);
    });
};
