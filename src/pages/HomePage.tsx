import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../store/reducers/userSlice';
import NavigationBar from '../components/common/NavigationBar';
import Comments from '../components/comments/Comments';
import Comment from '../components/comments/Comment';



const HomePage = () => {





  return (
    <div>
      <NavigationBar />
      <div className='border-2 border-red-900'>
      <Comment />

      </div>

    </div>
  )
}

export default HomePage