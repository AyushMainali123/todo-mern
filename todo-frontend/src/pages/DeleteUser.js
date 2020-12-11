import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "@material-ui/core";
import { deleteUser } from "../actions/userActions";
const DeleteUser = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      {users.map(({ name, id }) => (
        <Card
          key={id}
          elevation={3}
          raised={true}
          style={{
            padding: 15,
            margin: "40px auto",
            maxWidth: 720,
            width: "80vw",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>{name}</div>
          <Button onClick={() => handleDelete(id)} variant="contained" color="secondary"> DELETE </Button>
        </Card>
      ))}
    </div>
  );
};

export default DeleteUser;
