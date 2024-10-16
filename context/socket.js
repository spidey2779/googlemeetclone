const { useState, useEffect, createContext, useContext } = require("react");
const { io } = require("socket.io-client");

const SocketContext = createContext(null);
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const connection = io();
    console.log("socket connection", connection);
    setSocket(connection);
  }, []);
  socket?.on("connect_error", async (err) => {
    console.log("socket connection error", err);
    await fetch('/api/socket')
  });
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
