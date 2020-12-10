import {ADD_TODO, DELETE_TODO, TODO_SUCCESS, TODO_FAILURE, DELETE_TODO_BY_USERID} from '../types'

const initialState = {
  todos: [],
  loading: true,
  error: ''
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
    // Update Todo
    case DELETE_TODO_BY_USERID:
      let uid = action.payload.id;
      return {...state, todos: state.todos.filter(todo => todo.id !== uid)}
    // Remove Todo
    case DELETE_TODO: 
      let newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      return {...state, todos: newTodos}
    // default
    default:
      return state;
  }
};

export default todoReducer;
