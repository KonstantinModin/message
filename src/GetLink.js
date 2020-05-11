import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetLink = () => {
    const [state, setState] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submit");
    };

    return (
        <>
            <h1>Full-screen messages</h1>
            <h3>Type some text to get link to send to your friend</h3>
            <form onSubmit={submitHandler}>
                <textarea
                    type="text"
                    required
                    placeholder="Enter your message..."
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <button type="submit">Get Link</button>
            </form>
            <Link to={`/message?m=${state.trim().split` `.join`%20`}`}>
                Show message
            </Link>
        </>
    );
};

export default GetLink;
