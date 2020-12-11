import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "@material-ui/core";
import { deleteUser } from "../actions/userActions";
const DeleteUser = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteUser(id, name));
  };

  return (
    <div>
      {users.length ? (
        users.map(({ name, id }) => (
          <Card
            key={id}
            elevation={3}
            raised={true}
            style={{
              padding: 15,
              margin: "40px auto",
              maxWidth: 720,
              width: "80vw",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{name}</div>
            <Button
              onClick={() => handleDelete(id, name)}
              variant="contained"
              color="secondary"
            >
              {" "}
              DELETE{" "}
            </Button>
          </Card>
        ))
      ) : (
        <h3 className="home__message">No Users!!</h3>
      )}
    </div>
  );
};

export default DeleteUser;
