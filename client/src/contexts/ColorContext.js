import {createContext, useState} from "react"

const ColorContext = createContext (null)

export const ColorProvider = ({children})=>{
    const [color, setColor]= useState ();
   

    const values= {
        color,
        setColor,
    };
    
    return <ColorContext.Provider value={values}>
    {children}
    </ColorContext.Provider>
}

export default ColorContext