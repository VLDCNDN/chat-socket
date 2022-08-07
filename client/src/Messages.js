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
      <>
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
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />

          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />
          <MessageComponent
            message={{
              value: "Lorem Ipsum is simply dummy text of the printing",
              time: "10:00pm",
            }}
            user={{ userId: 123, userName: "Manny", isOwner: false }}
          />

          <div ref={endMessageRef} />
        </div>
        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
          <input
            type="text"
            placeholder="Message"
            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />

          <button type="submit">
            <svg
              className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </>
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
