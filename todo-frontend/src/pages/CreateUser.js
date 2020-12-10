import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./CreateUser.css";
import { addNewUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const CreateUser = () => {
  const [input, setInput] = useState("");

  const users = useSelector((state) => state.userReducer).users;
  const dispatch = useDispatch();

  useEffect(() => {
    setInput("");
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(input));
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="createUser">
      <form className="createUser__form" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          className="createUser__textField"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          className="createUser__submit"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
