import React from "react";

const ShowMessage = ({ location }) => {
    const query = new URLSearchParams(location.search).get("m");
    console.log(query);

    const tem =
        "Hi there! Could you please send me docs? I am waiting too long!!!";

    return (
        <div className="ShowMessage">
            <div className="Message">{query}</div>
        </div>
    );
};

export default ShowMessage;
