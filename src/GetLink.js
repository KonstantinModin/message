import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./GetLink.css";

const templates = [
    "Happy Birthday !!!",
    "Happy New Year !!!",
    "Good luck !!!",
    "Where is my money ???",
];

const URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://wonderful-heyrovsky-e4a6d2.netlify.app/";

const GetLink = ({
    state,
    setState,
    visible,
    setVisible,
    checked,
    setChecked,
}) => {
    const message = `message?m=${state.trim().split` `.join`%20`}&c=${
        checked ? "1" : "0"
    }`;

    const inputRef = useRef();

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log("Async: Copying to clipboard was successful!", text);
            setVisible(true);
            setTimeout(() => setVisible(false), 1000);
        } catch (err) {
            console.error("Async: Could not copy text: ", JSON.stringify(err));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        copyToClipboard(URL + message);
        inputRef.current && inputRef.current.select();
    };

    const noMessage = state.trim().length === 0;

    return (
        <div className="GetLink container">
            <h1>BIG-size messages</h1>
            <h3>Type some text to get link to send to your friend</h3>
            <Animated
                isVisible={visible}
                animationIn="swing"
                animationOut="bounceOut"
                animationInDuration={1000}
                animationOutDuration={500}
                animateOnMount={false}
            >
                <h3>Link has been copied!!!</h3>
            </Animated>
            <div className="form">
                <div className="col-2">
                    <textarea
                        type="text"
                        required
                        placeholder="Enter your message..."
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <div className="templates col-1">
                        <span>Some templates...</span>
                        {templates.map((e, i) => (
                            <button key={i} onClick={() => setState(e)}>
                                {e}
                            </button>
                        ))}
                    </div>
                </div>
                {!noMessage && (
                    <>
                        <div className="confetti">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                id="confetti"
                            />
                            <label htmlFor="confetti">Include confetti</label>
                        </div>
                        <button className="button" onClick={submitHandler}>
                            Copy Link
                        </button>

                        <input value={URL + message} ref={inputRef} readOnly />
                        <Link
                            className="button preview"
                            to={{ pathname: "/message", state: message }}
                        >
                            Preview
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default GetLink;
