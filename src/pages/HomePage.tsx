import React from 'react';
import Logout from '../components/common/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../store/reducers/userSlice';
import NavigationBar from '../components/common/NavigationBar';



const HomePage = () => {





  return (
    <div>

      <NavigationBar />
      <Logout />
    </div>
  )
}

export default HomePage