import React from "react";
import "./ShowMessage.css";

const ShowMessage = ({ location: { search, state }, history }) => {
    const query = new URLSearchParams(search ? search : state.slice(7)).get(
        "m"
    );
    console.log(query, search, state, state && state.slice(7), history);

    const defaultMessage = "404 Message not found!";

    return (
        <div className="ShowMessage container">
            Debug
            {state && (
                <div className="preview">
                    <span>Preview</span>
                    <button onClick={() => history.goBack()}>Go back</button>
                </div>
            )}
            <div className="Message">{query ? query : defaultMessage}</div>
        </div>
    );
};

export default ShowMessage;
