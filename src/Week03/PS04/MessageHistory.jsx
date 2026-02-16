import { useState, useRef, useEffect } from "react";
const MessageHistory = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [focusCount, setFocusCount] = useState(0);

    const inputRef = useRef(null);
    const historyRef = useRef([]);

    useEffect(() => {
      console.log("Component rendered");
    });

    const handleAddMessage = () => {
      if (input.trim() === "") return;

      setMessages((prev) => [...prev, input]);

      historyRef.current.push(input);

      setInput("");
    };

    const handleFocus = () => {
      setFocusCount((prev) => prev + 1);
    };

    const focusInput = () => {
      inputRef.current.focus();
    };
    return (
      <div className="p-2 m-10 border border-gray-300 rounded-md">
        <h2>Focus Tracker & Message History</h2>

        <div className="mb-10">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={handleFocus}
            placeholder="Type message..."
          />
          <button onClick={handleAddMessage} className="ml-2">
            Submit
          </button>
          <button
            onClick={focusInput}
            className="ml-2"
          >
            Focus Input
          </button>
        </div>

        <p>Focus count: {focusCount}</p>

        <div className="mb-10">
          <strong>Messages:</strong>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>- {msg}</li>
            ))}
          </ul>
        </div>

        <p className="mb-10">
          <strong>History in Ref (no re-render display):</strong>{" "}
          {historyRef.current.join(", ")}
        </p>
      </div>
    );
};

export default MessageHistory;
