export interface AuthContextInterFace {
    user: React.ReactNode
    loading: boolean
    displayName: string
    email: string
  }

  export interface UserData{
    name: string,
    lastName: string,
    email: string,
    date: string,
    id: string | number,
  }


  export interface CommentsData{
    userID: string,
    userName: string,
    createdAt: any,
    date: string,
    text: string,
    postID: string,
    reply: any[],
    photoURL: string
  }

  export interface ReplyCommentsData{
    userID: string,
    userName: string,
    createdAt: any | string,
    email: string,
    date: string,
    text: string,
    postID: string,
    photoURL: string,
    parentPostID:string,
    nested:boolean
  }

