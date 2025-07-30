import axios from "axios";
import React, { useState, useEffect } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/chat/1"); // hardcoded user_id for now
        setMessages(res.data);
      } catch (error) {
        console.error("Failed to fetch chat history");
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        user_id: 1, // or dynamic user later
        message: input,
      });

      setMessages([...newMessages, { sender: "bot", text: res.data.response }]);
      setInput("");
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Something went wrong." },
      ]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="h-96 overflow-y-auto border p-4 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.sender === "user" ? "bg-blue-200" : "bg-green-100"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <input
          className="flex-1 border p-2 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button
          className="bg-teal-700 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
