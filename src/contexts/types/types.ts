import { User } from "firebase/auth";

export interface AuthContextValue {
    user:User | null
    UsersignOut: () => void
}


export const initialContextValue: AuthContextValue = {
    user:null,
    UsersignOut:() => {}
};