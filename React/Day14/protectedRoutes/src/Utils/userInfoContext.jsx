import { useContext } from "react"
import { createContext } from "react"

const UserContext = createContext()

const userInfoContext = ({element})=>{
    const isValidUser = false
    const isAdmin = true
    return(
       <UserContext.Provider value={{isValidUser, isAdmin}}>
            {element}
       </UserContext.Provider>
    )
}

export default userInfoContext


export function myContext(){
    return useContext(UserContext)
}