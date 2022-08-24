import React, { Component, useEffect, useState } from "react";
import io from "socket.io-client";

import UserListComponent from "../components/UserList";
import Messages from "../Messages";

class Chat extends Component {
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   const newSocket = io(`http://${window.location.hostname}:3000`, {autoConnect: false});
  //   setSocket(newSocket);
  //   return () => newSocket.close();
  // }, [setSocket]);

  render() {
    return (
      <>
        <div className="flex bg-neutral-900 h-screen">
          <div className="h-full border-r border-neutral-800 w-24"></div>
          <div className="h-full border-r border-neutral-800 lg:w-96 pt-8 sm:w-2/6">
            <p className="w-full p-4 font-medium text-4xl text-white">
              Messages
            </p>
            <p className="w-full p-4 font-medium text-neutral-600 uppercase antialiased">
              All Messages
            </p>
            <div className="w-full">
              <UserListComponent
                usersData={["Marvin", "Cristy", "Bob", "Windy"]}
              />
            </div>
          </div>
          <div className="w-3/6 h-full">
            <Messages />
          </div>
          <div className="shrink h-full border-l border-neutral-800"></div>
        </div>
      </>
    );
  }
}

export default Chat;
