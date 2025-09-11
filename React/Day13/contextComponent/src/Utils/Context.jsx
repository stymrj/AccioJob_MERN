import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({children})=>{
    const[age,setAge] = useState(25)
    const[name,setName] = useState("Satyam Gupta")
    const[email,setEmail] = useState("sstymrj@gmail.com")
    const[phone,setPhone] = useState("+918302783900")

    return(
        <UserContext.Provider value={{age,name,email,phone,setAge,setName}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider

export function useMyContext(){
    return useContext(UserContext)
}