import React, { createContext, useEffect, useState, } from "react";
import { AuthContextValue, initialContextValue } from "./types/types";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
const AuthContext = createContext<AuthContextValue>(initialContextValue);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [user,setUser] = useState<User | null>(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth,(user) => {
           if(user) {
            setUser(user)
           } else {
            setUser(null)
           }
        })
        return () => listen();
    },[])

    const UsersignOut = () => {
        signOut(auth).then(() => {
            console.log("sign outed succsesfuly")
        }).catch((err) => {
            console.log(err); 
        })
    }
  const value: AuthContextValue = {
    user,
    UsersignOut
  };
 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;