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
    comments: {
      id: 0,
      comment: [],
      parentId: null | number,
      createdAt: string,
    },
  }