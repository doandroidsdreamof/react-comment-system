import React from 'react';

const LoginReducer = function (state: any, action: any) {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        [action.type]: action.payload,
      };
    case 'password':
      return {
        ...state,
        [action.type]: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
