import { io } from 'socket.io-client';

//connect client socket with back one
const socket = io(`http://161.35.113.91:3002`, { transports: ["websocket"] });

function useSocket() {
  return (
    {
        socket
    }
  )
}

export default useSocket