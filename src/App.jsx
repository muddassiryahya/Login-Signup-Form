import './App.css';
import AppRouter from './router';
import User from "./context/UserContext";
import { useState } from 'react';
import Chat from './context/ChatContext';


function App() {
  const [user, setUser] = useState({ email: "muhammad@gmail.com", name: "Muhammad" });
  const [chat, setchat] = useState("Hello");

  return (
    <Chat.Provider value={chat}>
      <User.Provider value={{ user, setUser }}>
        <AppRouter />
      </User.Provider>
    </Chat.Provider>
  );
}

export default App;
