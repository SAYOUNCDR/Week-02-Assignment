import { useState } from "react"

const CharacterWarning = () => {
    const [message, setMessage] = useState("");
    const [remaining, setRemaining] = useState(50);
    const [warning, setWarning] = useState(false);

    const handleChange = (e) => {
        setMessage(e.target.value);
        setRemaining(50 - e.target.value.length);
        setWarning(e.target.value.length > 40);
    };

    return (
        <div className="flex flex-col items-center mx-4 my-10">
            <h1 className="font-bold text-center text-xl mb-4">Live Character Counter</h1>
            <input type="text" value={message} onChange={handleChange} maxLength={50} placeholder="Type your message..." className="border border-gray-300 p-2 rounded-md"/>
            <p className="text-center">Remaining characters: {remaining}</p>
            {warning && <p className="text-red-500">Warning: You have less than 10 characters left.</p>}
        </div>
    )
}

export default CharacterWarning