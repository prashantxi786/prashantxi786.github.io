import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const contextapi=createContext()
const ContextapiProvider = ({children}) => {
    const [change,setChange] = useState(false)
    const logout=()=>{
        setChange(!change)
    }
  return (
    <div>
      <contextapi.Provider value={{change,logout}}>
        {children}
      </contextapi.Provider>
    </div>
  )
}

export default ContextapiProvider
