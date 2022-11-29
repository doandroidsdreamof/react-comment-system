import React, { createContext, useEffect,useState } from "react";
import { AuthContextInterFace } from "../types/Interfaces";

export const AuthContext = React.createContext<AuthContextInterFace | null>(null)

export const AuthProvider  = ({children}: any) => {
  const [user, setUser] = useState<AuthContextInterFace | null>(null)

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
