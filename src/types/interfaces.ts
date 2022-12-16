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
    comments: {
      comment: [],
      parentId: null | number,
      createdAt: string,
    },
  }