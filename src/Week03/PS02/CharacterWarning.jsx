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
        <div>
            <h1>Live Character Counter</h1>
            <input type="text" value={message} onChange={handleChange} maxLength={50} placeholder="Type your message..." />
            <p>Remaining characters: {remaining}</p>
            {warning && <p>Warning: You have less than 10 characters left.</p>}
        </div>
    )
}

export default CharacterWarning