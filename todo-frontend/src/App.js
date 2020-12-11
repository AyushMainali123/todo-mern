import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
import DeleteUser from "./pages/DeleteUser";
import { getUsers } from "./actions/userActions";
import { getTodos } from "./actions/todoActions";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer)
  const todos = useSelector(state => state.todoReducer)
  console.log(todos, users)
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTodos());
  }, []);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="app">
        <Navbar />

        {/*---- Routing ----*/}
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/create-todo">
            <CreateTodo />
          </Route>
          <Route path="/update/:id">
            <UpdateTodo />
          </Route>
          <Route path="/delete-user">
            <DeleteUser />
          </Route>
        </Switch>
        {/* ----Routing Ends----- */}
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
