import React, { useState, useReducer } from 'react'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle, replyToggle } from '../../store/reducers/userSlice'
import commentValueReducer from '../../hooks/commentValueReducer'

const CommentForm = (reply: any) => {
  const replyRedux = useSelector((state: any) => state.reply.replySlice)
  const commentState = {
    mainComment: '',
    reply: '',
  };
  const [datas, dispatch] = useReducer(commentValueReducer, commentState);

  const getCommentValue = function (e: any) {
    if (reply?.reply === false) {
      dispatch({
        type: 'mainComment',
        payload: e.value,
      });

    }
    if (reply?.reply === true) {
      dispatch({
        type: 'reply',
        payload: e.value,
      });
    }
  }

  console.log("🚀 ~ file: CommentForm.tsx:14 ~ CommentForm ~ datas", datas)


  return (
    <>
      {
        <form className={" mb-6 bg-white shadow-sm p-2 rounded-md"}>
          <div className="py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 ">
            <label htmlFor="comment" className="sr-only z-50">Your comment</label>
            <textarea
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => getCommentValue(e.target)}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
              placeholder="Write a comment..." required></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
            {reply.reply ? "Post reply" : "Post comment"}
          </button>
        </form>

      }

    </>

  )
}

export default CommentForm