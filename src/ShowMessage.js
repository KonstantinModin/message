import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import "./ShowMessage.css";

const ShowMessage = ({ location: { search, state }, history }) => {
    const query = new URLSearchParams(state ? state.slice(7) : search);
    const message = query.get("m");
    const confetti = query.get("c") === "1";

    console.log(query, search, state, state && state.slice(7), history);

    const defaultMessage = "404 Message not found!";

    const { width, height } = useWindowSize();

    return (
        <div className="ShowMessage container">
            {confetti && <Confetti width={width} height={height} />}
            {state && (
                <div className="preview">
                    <span>Preview</span>
                    <button className="button" onClick={() => history.goBack()}>
                        Go back
                    </button>
                </div>
            )}
            <div className="Message">{message ? message : defaultMessage}</div>
        </div>
    );
};

export default ShowMessage;
