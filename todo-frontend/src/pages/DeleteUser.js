import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser} from '../actions/userActions'
const DeleteUser = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  } 

  return (
    <div>
      {users.map(({ name, id }) => (
        <div key={id} onClick = {() => handleDelete(id)}> {name}</div>
      ))}
    </div>
  );
};

export default DeleteUser;
