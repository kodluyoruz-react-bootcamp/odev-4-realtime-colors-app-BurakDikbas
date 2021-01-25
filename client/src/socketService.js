import io from "socket.io-client";

let socket;

export const initSocket = () => {
	socket = io("https://color-app-bd.herokuapp.com/", {
		transports: ["websocket"],
	});

	console.log("Connecting...");
	socket.on("connect", () => console.log("Connected!"));
};

export const disconnectSocket = () => {
	console.log("Disconnecting...");
	if (socket) socket.disconnect();
};

export const sendColor= (color)=>{
  if (socket) socket.emit ("new-color", color)
}

export const subscribeToColor = (bd)=>{
  if (!socket) return true;

  socket.on("receive-color", (color)=>{
    console.log("receive-color:", color)
    bd(color)
  });
}

  
