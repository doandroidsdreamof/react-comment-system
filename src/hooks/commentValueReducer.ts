import React from 'react';


const commentValueReducer = function (state: any, action: any) {
  switch (action.type) {
    case 'mainComment':
      return{
        ...state,
        [action.type]: action.payload
      }
    case 'reply':
      return{
        ...state,
        [action.type]: action.payload
      }
      default:
        return state;

  }
};

export default commentValueReducer;
