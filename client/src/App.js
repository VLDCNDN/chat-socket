import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import UserListComponent from "./components/UserList";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  

  return (
    <div className="App">
      <div class="flex bg-neutral-900 h-screen">
        <div class="h-full border-r border-neutral-800 w-24"></div>
        <div class="h-full border-r border-neutral-800 lg:w-96 pt-8 sm:w-2/6">
          <p class="w-full p-4 font-medium text-4xl text-white">Messages</p>
          <p class="w-full p-4 font-medium text-neutral-600 uppercase antialiased">
            All Messages
          </p>
          <div class="w-full">
            <UserListComponent usersData={['Marvin', 'Cristy', 'Bob','Windy']} />
          </div>
        </div>
        <div class="grow h-full"></div>
        <div class="shrink h-full border-l border-neutral-800"></div>
      </div>
    </div>
  );
}

export default App;

