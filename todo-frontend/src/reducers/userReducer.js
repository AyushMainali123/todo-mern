import {USER_SUCCESS, USER_FAILURE, ADD_USER, DELETE_USER } from '../types'

const initialState = {
  users: [],
  loading: true,
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case USER_SUCCESS:
      return { ...state, loading: false, users: action.payload.users }
    case USER_FAILURE:
      return {...state, loading: false, error: action.payload.message}
    // Add user
    case ADD_USER:
      return {...state, users: [...state.users, action.payload.data]}
    // Remove user
    case DELETE_USER: 
      return {...state, users: state.users.filter(user => user.id !== action.payload.id)}
    // default
    default:
      return state;
  }
};

export default userReducer;
