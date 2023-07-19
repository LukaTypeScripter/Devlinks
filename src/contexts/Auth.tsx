import React, { createContext, useEffect, useState } from "react";
import { AuthContextValue, initialContextValue } from "./types/types";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";


const AuthContext = createContext<AuthContextValue>(initialContextValue);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => listen();
  }, []);

  const UsersignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value: AuthContextValue = {
    user,
    UsersignOut,
  };

  return (
    //return children if loading isnt null,so we can reload page and still be on private route
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
