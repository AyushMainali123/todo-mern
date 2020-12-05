import { USER_SUCCESS, USER_FAILURE, ADD_USER } from "../types";
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
