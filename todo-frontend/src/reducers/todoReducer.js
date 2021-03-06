import { updateTodo } from "../actions/todoActions";
import {
  ADD_TODO,
  DELETE_TODO,
  TODO_SUCCESS,
  TODO_FAILURE,
  DELETE_TODO_BY_USERID,
  DELETE_TODO_BY_USERNAME,
  UPDATE_TODO,
} from "../types";

const initialState = {
  todos: [],
  loading: true,
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // SUCCESS LOADING
    case TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload.todos };
    // ERROR LOADING
    case TODO_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    // Add Todo
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.data] };

    // Delete Todo by UserId
    case DELETE_TODO_BY_USERID:
      let uid = action.payload.id;
      return { ...state, todos: state.todos.filter((todo) => todo.id !== uid) };

    // Delete by username
    case DELETE_TODO_BY_USERNAME:
      let user = action.payload.user;
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          console.log(todo.user.name, user);
          return todo.user.name !== user;
        }),
      };
    // Remove Todo
    case DELETE_TODO:
      let newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: newTodos };

    // Update TODO
    case UPDATE_TODO:
      let {data} = action.payload;
      console.log({ data }) //Checked
       let updatedTodos = state.todos.map((todo) => todo.id === data.id ? {...data} : {...todo})
      console.log({updatedTodos})
      return {
        ...state,
        todos: updatedTodos
      };
    
    // default
    default:
      return state;
  }
};

export default todoReducer;
