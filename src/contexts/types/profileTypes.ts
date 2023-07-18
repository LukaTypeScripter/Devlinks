export interface DetailsContextValue {
    handleFirstNameChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleLastNameChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    handleEmailChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    setProfilePicture:React.Dispatch<React.SetStateAction<string | null>>
    profilePicture: string | null
    firstName:string
    lastName:string
    email:string
}


export const initialContextValue: DetailsContextValue = {
    handleFirstNameChange:() => {},
    handleLastNameChange:() => {},
    handleEmailChange:() => {},
    setProfilePicture:() => {},
    profilePicture: null,
    firstName:'',
    lastName:"",
    email:""
};