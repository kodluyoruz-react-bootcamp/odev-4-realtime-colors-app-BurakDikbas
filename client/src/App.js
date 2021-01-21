import './App.css';
import {useEffect, useLayoutEffect} from "react"
import { io } from 'socket.io-client';

function App() {
 
  useEffect(()=>{
    const socket = io("http://localhost:3000/", {
      transports: ['websocket']
    });
  },[] )

  return (
    <div >

    </div>
  );
}

export default App;
