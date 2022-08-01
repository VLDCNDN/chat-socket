import React, { Component, useEffect, useState, useRef } from "react";
import MessageComponent from "./components/Message";

function Messages({ messages }) {
  const endMessageRef = useRef(null);

  const scrollToBottom = () => {
    endMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function listsData() {
    return (
      <div className="flex flex-col w-full h-full overflow-y-auto scroll-smooth">
        <MessageComponent
          message={{
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            time: "10:00pm",
          }}
          user={{ userId: 123, userName: "Manny", isOwner: false }}
        />

        <MessageComponent
          message={{
            value:
              "here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
            time: "10:00pm",
          }}
          user={{ userId: 123, userName: "Dementor", isOwner: true }}
        />
        
        <MessageComponent
          message={{
            value:
              "Lorem Ipsum is simply dummy text of the printing",
            time: "10:00pm",
          }}
          user={{ userId: 123, userName: "Manny", isOwner: false }}
        />
        <div ref={endMessageRef} />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex border-b border-neutral-800 h-20 text-center items-center p-4">
        <p className="font-normal text-xl text-neutral-300">Chat Name</p>
      </div>
      {listsData()}
    </div>
  );
}

export default Messages;
