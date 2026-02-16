import { useState, useRef } from "react";
const MessageHistory = () => {
    const [focusCount, setFocusCount] = useState(0);
    const [messageHistory, setMessageHistory] = useState([]);
    const [messageHistoryRef, setMessageHistoryRef] = useState([]);
    const inputRef = useRef(null);

    const handleFocus = () => {
        setFocusCount(focusCount + 1);
    }

    const handleSubmit = () => {
        setMessageHistory([...messageHistory, inputRef.current.value]);
        setMessageHistoryRef([...messageHistoryRef, inputRef.current.value]);
        inputRef.current.value = "";
    }

    const handleFocusInput = () => {
        inputRef.current.focus();
    }
    return (
    <div className="p-2 m-10 border border-gray-300 rounded-md">
      <h1 className="text-center text-md font-bold">
        MessageHistory with Input foucus count
      </h1>
      <div>
        <input type="text" placeholder="Type message" className="p-2 border border-gray-300 rounded-md flex-1" ref={inputRef} onFocus={handleFocus}/>
        <button className="p-2 border border-gray-300 rounded-md shadow-sm" onClick={handleSubmit}>Submit</button>
        <button className="p-2 border border-gray-300 rounded-md shadow-sm" onClick={handleFocusInput}>Focus Input</button>
          </div>
          <div>
              <p>Focus count: {focusCount}</p>
              <p>Message History: </p>
              <ul>
                  {messageHistory.map((message, index) => (
                      <li key={index}>{message}</li>
                  ))}
              </ul>

              <p>Message history in useRefef no re-render:</p>
              <ul>
                  {messageHistoryRef.map((message, index) => (
                      <li key={index}>{message}</li>
                  ))}
              </ul>
          </div>
    </div>
  );
};

export default MessageHistory;
