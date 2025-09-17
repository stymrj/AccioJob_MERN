import { useContext } from "react"
import { createContext } from "react"

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const userData = null
    // const userData = {name:'satyam'}
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


export function useMyContext(){
    return useContext(UserContext)
}
