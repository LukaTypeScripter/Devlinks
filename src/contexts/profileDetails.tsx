import React, { createContext, useEffect, useState, } from "react";
import { DetailsContextValue, initialContextValue } from "./types/profileTypes";

const DetailsContext = createContext<DetailsContextValue>(initialContextValue);
export const DetailsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
      };
    
      const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
      };
    
      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    
 
  const value: DetailsContextValue = {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    setProfilePicture,
    profilePicture,
    firstName,
    lastName,
    email
  };
 
  return <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>;
};

export default DetailsContext;