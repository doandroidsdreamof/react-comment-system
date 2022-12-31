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


  export interface Comments{
    userID: string,
    userName: string,
    createdAt: string,
    text: string,
    postID: string,
    reply: any[],
  }