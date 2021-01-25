import {useEffect, useState, useContext} from 'react'
import styles from "./style.module.css"
import { disconnectSocket, initSocket, sendColor, subscribeToColor
    } from "../socketService";

import ColorContext from "../contexts/ColorContext"

function BackColor() {
    const [color, setColor]= useState ("#fff");
    
    const data= useContext(ColorContext)
    console.log(data)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendColor(color)
    }
    useEffect(()=>{
        initSocket();
    
    subscribeToColor ((color)=>{
        setColor(color)
    })

    return ()=> disconnectSocket();
    
    }, [])
    return (
        <div style={{ backgroundColor: `${color}` }} className={styles.background}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    onChange={(e) => setColor(e.target.value)}
                    type="color"
                    value={color}
                    name="color"
                />
                <button>Change color</button>
                <p>Your color is : {color}</p>
            </form>
        </div>
    )
}

export default BackColor
