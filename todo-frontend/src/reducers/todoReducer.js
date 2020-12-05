const initialState = {
  todos: [],
  loading: true,
  error: ''
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // SUCCESS LOADING
    case 'TODO_SUCCESS': 
      return {...state, loading: false, todos: action.payload.todos}
    // ERROR LOADING
    // Add Todo
      case 'ADD_TODO': 
          return {...state, todos: [...state.todos, action.payload.data]}
    // Update Todo
    // Remove Todo
    // default
    default:
      return state;
  }
};

export default todoReducer;
