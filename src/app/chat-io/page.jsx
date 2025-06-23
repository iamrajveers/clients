'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useMemo } from 'react';

function Home() {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [socketId, setSocketId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("")

  // const newsocket=useMemo(()=> io('http://localhost:5000'),[]);

  useEffect(() => {
    const newSocket = io('http://localhost:5000', {
      transports: ['websocket'],
      withCredentials: true,
    });


    setSocket(newSocket);

    newSocket.on('connect', () => {
      setSocketId(newSocket.id);
      setConnected(true);
      console.log('Connected to server:', newSocket.id);
    });


    newSocket.on('welcome', (msg) => {
      console.log('Server:', msg);
      setMessages((prev) => [...prev, `Server: ${msg}`]);
    });


    newSocket.on('receive-emessage', (data) => {
      console.log('Message received:', data);
      setMessages((prev) => [...prev, data]);
    });


    newSocket.on('disconnect', () => {
      setConnected(false);
      setSocketId('');
    });


    return () => {
      newSocket.disconnect();
    };
  }, []);


  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      // socket.emit('message', {message,room});
      socket.emit('message', message);
      setMessage('');
    }
  };


  return (
    <div className="p-4 space-y-4">
      <div className="text-green-600 font-bold">
        {connected ? `Connected - Socket ID: ${socketId}` : 'Not connected'}
      </div>
      <h1 className="text-2xl font-bold text-green-800">Welcome to Socket.IO Chat</h1>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your message"
          className="border p-2 rounded text-black w-64"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send
        </button>
      </form>


      <ul className="space-y-1">
        {messages.map((msg, index) => (
          <li key={index} className="bg-green-100 p-2 rounded text-black">
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );

}


export default Home;