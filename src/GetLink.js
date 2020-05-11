import React, { useState } from "react";
import { Link } from "react-router-dom";

const URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://wonderful-heyrovsky-e4a6d2.netlify.app/";

const GetLink = () => {
    const [state, setState] = useState("");

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Async: Copying to clipboard was successful!", text);
        } catch (err) {
            console.error("Async: Could not copy text: ", JSON.stringify(err));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const message = `${URL}message?m=${state.trim().split` `.join`%20`}`;
        copyToClipboard(message);
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
            <Link to={`message?m=${state.trim().split` `.join`%20`}`}>
                Show message
            </Link>
        </>
    );
};

export default GetLink;
