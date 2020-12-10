import {
  USER_SUCCESS,
  USER_FAILURE,
  ADD_USER,
  DELETE_USER,
  DELETE_TODO_BY_USERID,
} from "../types";
import axios from "../axiosInstance";

export const getUsers = () => (dispatch) => {
  axios(`/user`)
    .then((response) => {
      let dataToBeDispatched = response.data.map((item) => ({
        name: item.name,
        id: item._id,
      }));
      dispatch({
        type: USER_SUCCESS,
        payload: {
          users: dataToBeDispatched,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: USER_FAILURE,
        payload: {
          message: error.message,
        },
      });
    });
};

export const addNewUser = (value) => (dispatch) => {
  axios
    .post(`user/add`, {
      name: value,
    })
    .then((response) => {
      console.log(response);
      let { _id: id, name } = response.data;
      dispatch({
        type: ADD_USER,
        payload: {
          data: { id, name },
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = (id) => (dispatch) => {
  axios.delete(`user/delete/${id}`).then((response) => {
    console.log(response);
    const { _id: id } = response.data;
    dispatch({
      type: DELETE_USER,
      payload: {
        id,
      },
    });
    dispatch({
      type: DELETE_TODO_BY_USERID,
      payload: {
        id,
      },
    });
  });
};
