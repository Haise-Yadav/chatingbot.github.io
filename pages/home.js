import Page from "@/components/page";
import down from "@/assets/down.svg";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import bot2 from "@/assets/bot2.png";

export default function Bot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    try {
      // Send the user's message to the backend API.
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: userInput,
      });

      // Update the chat history with the user's message and the bot's response.
      setChatHistory([
        ...chatHistory,
        { text: userInput, sender: "user" },
        { text: response.data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setUserInput(""); // Clear the user's input field.
  };

  return (
    <Page>
      
        <div className="h-screen flex  justify-around items-center pl-10 bg-gradient-to-br from-[#2C3E50] to-[#000000] text-white bg-gray-100">
        <div>
          <Image src={bot2} />
        </div>
          <div className="max-w-lg w-full p-4 bg-white rounded-lg shadow-lg">
            <div className="h-[500px] overflow-y-auto text-black mb-4">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`py-2 px-4 rounded-lg text-black ${
                      message.sender === "user"
                        ? "bg-[#f75a52] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-black">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg"
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="ml-2 px-4 py-2 bg-[#FF5349] text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </div>
          </div>
       
        </div>
    </Page>
  );
}
