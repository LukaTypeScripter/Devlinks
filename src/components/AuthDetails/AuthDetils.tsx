import AuthContext from "../../contexts/Auth"
import {useContext} from 'react'
function AuthDetils() {
   const {user} = useContext(AuthContext)
  return (
    <div>{user ? (<>sign In</>) : (<>Sign Out</>)}</div>
  )
}

export default AuthDetils