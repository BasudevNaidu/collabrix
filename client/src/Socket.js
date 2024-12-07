import { io } from 'socket.io-client';

// Function to initialize socket connection
export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
  };

  // Use environment variable for backend URL
  return io(process.env.REACT_APP_BACKEND_URL, options);
};
