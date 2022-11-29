import React,{FC} from 'react'



interface Deneme{
  x?: string

}

 const Comment: FC <Deneme> = (prop) => {
  console.log("🚀 ~ file: Comment.tsx:11 ~ prop", prop)
  return (
    <div className='text-white text-2xl'>
     {prop.x}


    </div>
  )
}


export default Comment