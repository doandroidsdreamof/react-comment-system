import React from 'react';

// const [datas,dispatch] = useReducer(RegisterForm,formState)

const RegisterReducer = function (state: any, action: any) {
  switch (action.type) {
    case 'name':
      return{
        ...state,
        [action.type]: action.payload
      }
    case 'lastName':
      return{
        ...state,
        [action.type]: action.payload
      }
    case 'email':
      return{
        ...state,
        [action.type]: action.payload
      }

    case 'password':
      return{
        ...state,
        [action.type]: action.payload
      }
      default:
        return state;


  }
};

export default RegisterReducer;
