import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import GetLink from "./GetLink";
import ShowMessage from "./ShowMessage";

// Css
import "./App.css";

const App = () => {
    const [state, setState] = useState("");
    const [visible, setVisible] = useState(false);

    const getLinkProps = {
        state,
        setState,
        visible,
        setVisible,
    };

    return (
        <div className="App container">
            <Route
                exact
                path="/"
                render={() => <GetLink {...getLinkProps} />}
            />
            <Route exact path="/message" component={ShowMessage} />
        </div>
    );
};

export default App;
