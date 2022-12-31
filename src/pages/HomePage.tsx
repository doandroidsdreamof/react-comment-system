import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../store/reducers/userSlice';
import NavigationBar from '../components/common/NavigationBar';
import Comments from '../components/comments/Comments';
import Comment from '../components/comments/Comment';



const HomePage = () => {





  return (
    <div className=''>
      <NavigationBar />
      <div className=''>
      <Comment />

      </div>

    </div>
  )
}

export default HomePage