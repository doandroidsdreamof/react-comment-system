import React from 'react'

const CommentForm = () => {
  return (
  <>
    <form className="mb-6 shadow-md p-2 rounded-md">
        <div className="py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-200 ">
            <label htmlFor="comment" className="sr-only z-50">Your comment</label>
            <textarea id="comment"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
            Post comment
        </button>
    </form>user
  </>

  )
}

export default CommentForm