import React, { createContext, useReducer } from 'react';

const initialState = {
  posts: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 10,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
        totalCount: action.payload.length,
        currentPage: 1,
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload.id),
        totalCount: state.totalCount - 1,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
